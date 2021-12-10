import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from './Loading';
import Paginate from './Paginate';

function Giphy() {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	// Pagination
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage, setItemsPerPage] = useState(25);
	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

	// page 1 item 1 - item 25
	// page 2 item 26 - item 50
	// page 3 item 51 - item 75

    const pageSelected = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    // ------------------------------------------
	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		try {
			setIsLoading(true);
			const results = await axios(
				'https://api.giphy.com/v1/gifs/trending?api_key=0OFP1iubXivPDgr4RlxTc2wKQNAXJ8y1&limit=100&rating=g'
			);
			setData(results.data.data);
			console.log(results);
			setIsLoading(false);
		} catch (err) {
			console.log(err);
		}
	};

   

	const renderGifs = () => {
		if (isLoading) {
			return <Loading />;
		}
		return currentItems.map((value) => {
			return (
				<div className='gif' key={value.id}>
					<img src={value.images.fixed_height.url} alt='gifs' />
				</div>
			);
		});
	};

	return (
		<div>
            <button onClick={() => {setItemsPerPage(10)}}>10 per page</button>
            <button onClick={() => {setItemsPerPage(5)}}>5 per page</button>
            <Paginate currentPage={currentPage} itemsPerPage={itemsPerPage} totalItems={data.length}
            pageSelected={pageSelected}
            />
			<div className='container gifs'>{renderGifs()}</div>
		</div>
	);
}

export default Giphy;
