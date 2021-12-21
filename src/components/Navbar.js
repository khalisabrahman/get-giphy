import React from 'react';

function Navbar() {
	return (
		<nav className='navbar navbar-expand-md  navbar-light bg-light'>
			<div className='container-fluid'>
				<a href='#' className='navbar-brand'>
					{' '}
					Giphy app
				</a>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarNavAltMarkup'
					aria-controls='navbarNavAltMarkup'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span class='navbar-toggler-icon'></span>
				</button>
				<div class='collapse navbar-collapse' id='navbarNavAltMarkup'>
					<div class='navbar-nav ms-auto'>
						<a class='nav-link active' aria-current='page' href='#'>
							About
						</a>
						<a class='nav-link' href='#'>
							Home
						</a>
						<a class='nav-link' href='#'>
							Features
						</a>
						<a class='nav-link disabled'>Disabled</a>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
