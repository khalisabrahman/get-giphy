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

    // Current Items to map to screen
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
    // Example           data.slice(0, 25);
    /* The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.*/

	// page 1 item 1 - item 25  ==> In the array, this means index 0 to 24
	// page 2 item 26 - item 50   ===> 25 to 49
	// page 3 item 51 - item 75

    const pageSelected = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const previousBtn = () => {
        if (currentPage > 0) {
            return setCurrentPage(currentPage - 1);
        }
        return;
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
            <button onClick={previousBtn}>Previous</button>
			<div className='container gifs'>{renderGifs()}</div>
		</div>
	);
}

export default Giphy;
