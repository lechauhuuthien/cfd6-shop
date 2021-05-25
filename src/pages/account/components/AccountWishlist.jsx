import React from 'react';
import Pagination from '../../../components/Pagination/Pagination';

const DATA = [
	{
		img: {
			back: '/img/products/product-120.jpg',
			front: '/img/products/product-5.jpg',
		},
		status: 'new',
		type: 'Shoes',
		name: 'Leather mid-heel Sandals',
		price: '129.00',
		discountPrice: '',
	},
	{
		img: {
			back: '/img/products/product-121.jpg',
			front: '/img/products/product-6.jpg',
		},
		status: '',
		type: 'Dresses',
		name: 'Cotton floral print Dress',
		price: '40.00',
		discountPrice: '',
	},
	{
		img: {
			back: '/img/products/product-122.jpg',
			front: '/img/products/product-7.jpg',
		},
		status: 'sale',
		type: 'Shoes',
		name: 'Leather Sneakers',
		price: '85.00',
		discountPrice: '85.00',
	},
	{
		img: {
			back: '',
			front: '/img/products/product-8.jpg',
		},
		status: '',
		type: 'Tops',
		name: 'Cropped cotton Top',
		price: '',
		discountPrice: '',
		isOptions: true,
	},
	{
		img: {
			back: '/img/products/product-120.jpg',
			front: '/img/products/product-5.jpg',
		},
		status: 'new',
		type: 'Shoes',
		name: 'Leather mid-heel Sandals',
		price: '129.00',
		discountPrice: '',
	},
	{
		img: {
			back: '/img/products/product-121.jpg',
			front: '/img/products/product-6.jpg',
		},
		status: '',
		type: 'Dresses',
		name: 'Cotton floral print Dress',
		price: '40.00',
		discountPrice: '',
	},
	{
		img: {
			back: '/img/products/product-122.jpg',
			front: '/img/products/product-7.jpg',
		},
		status: 'sale',
		type: 'Shoes',
		name: 'Leather Sneakers',
		price: '85.00',
		discountPrice: '85.00',
	},
	{
		img: {
			back: '',
			front: '/img/products/product-8.jpg',
		},
		status: '',
		type: 'Tops',
		name: 'Cropped cotton Top',
		price: '29.00',
		discountPrice: '',
	},
];

function AccountWishlist() {
	return (
		<>
			{/* Products */}
			<div className="row">
				{DATA &&
					DATA.map((data, i) => {
						let { img, status, name, price, discountPrice, isOptions } = data;
						return (
							<div className="col-6 col-md-4">
								<div className="card mb-7">
									{/* Image */}
									<div className="card-img">
										{/* Action */}
										<button className="btn btn-xs btn-circle btn-white-primary card-action card-action-right">
											<i className="fe fe-x" />
										</button>
										{/* Badge */}
										{status && (
											<span
												className={`badge badge-${
													status === 'new' ? 'white' : 'dark'
												} card-badge card-badge-left text-uppercase`}
											>
												{status}
											</span>
										)}
										{/* Button */}
										<button
											className="btn btn-xs btn-block btn-dark card-btn"
											data-toggle="modal"
											data-target="#modalProduct"
										>
											<i className="fe fe-eye mr-2 mb-1" /> Quick View
										</button>
										{/* Image */}
										<img className="card-img-top" src={img.front} alt="..." />
									</div>
									{/* Body */}
									<div className="card-body font-weight-bold text-center">
										<a className="text-body" href="product.html">
											{name || ''}
										</a>{' '}
										<br />
										{isOptions ? (
											<a className="text-primary" href="#">
												Select Options
											</a>
										) : discountPrice ? (
											<span>
												<span className="font-size-xs text-gray-350 text-decoration-line-through">
													${price || 0}
												</span>
												<span className="text-primary">${discountPrice || 0}</span>
											</span>
										) : (
											<span className="text-muted">${price || 0}</span>
										)}
									</div>
								</div>
							</div>
						);
					})}
			</div>
			{/* Pagination */}
			<nav className="d-flex justify-content-center justify-content-md-end mt-10">
				<Pagination />
			</nav>
		</>
	);
}

export default AccountWishlist;
