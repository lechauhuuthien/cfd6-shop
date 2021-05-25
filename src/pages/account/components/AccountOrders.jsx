import React from 'react';
import Pagination from '../../../components/Pagination/Pagination';

const IMG_LIMIT = 3;
const DATA = [
	{
		id: '673290789',
		shippedDate: '01 Oct, 2019',
		status: 'Awating Delivery',
		amount: '259.00',
		img: [
			'/img/products/product-5.jpg',
			'/img/products/product-112.jpg',
			'/img/products/product-7.jpg',
			'/img/products/product-7.jpg',
			'/img/products/product-7.jpg',
			'/img/products/product-7.jpg',
		],
	},
	{
		id: '871090437',
		shippedDate: '25 Sep, 2019',
		status: 'In Processing',
		amount: '75.00',
		img: ['/img/products/product-5.jpg'],
	},
	{
		id: '891230563',
		shippedDate: '07 Sep, 2019',
		status: 'Delivered',
		amount: '69.00',
		img: ['/img/products/product-5.jpg', '/img/products/product-112.jpg'],
	},
];

function AccountOrders() {
	return (
		<>
			{DATA &&
				DATA.map((data, i) => {
					let { id, shippedDate, status, amount, img } = data;
					return (
						<div className="card card-lg mb-5 border">
							<div className="card-body pb-0">
								{/* Info */}
								<div className="card card-sm">
									<div className="card-body bg-light">
										<div className="row">
											<div className="col-6 col-lg-3">
												{/* Heading */}
												<h6 className="heading-xxxs text-muted">Order No:</h6>
												{/* Text */}
												<p className="mb-lg-0 font-size-sm font-weight-bold">{id || ''}</p>
											</div>
											<div className="col-6 col-lg-3">
												{/* Heading */}
												<h6 className="heading-xxxs text-muted">Shipped date:</h6>
												{/* Text */}
												<p className="mb-lg-0 font-size-sm font-weight-bold">
													<time dateTime="2019-10-01">{shippedDate || ''}</time>
												</p>
											</div>
											<div className="col-6 col-lg-3">
												{/* Heading */}
												<h6 className="heading-xxxs text-muted">Status:</h6>
												{/* Text */}
												<p className="mb-0 font-size-sm font-weight-bold">{status || ''}</p>
											</div>
											<div className="col-6 col-lg-3">
												{/* Heading */}
												<h6 className="heading-xxxs text-muted">Order Amount:</h6>
												{/* Text */}
												<p className="mb-0 font-size-sm font-weight-bold">${amount || 0}</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="card-footer">
								<div className="row align-items-center">
									<div className="col-12 col-lg-6">
										<div className="form-row mb-4 mb-lg-0">
											{img?.length > 0 &&
												img.slice(0, 3).map((link, i) => {
													return (
														<div key={i} className="col-3">
															<div
																className="embed-responsive embed-responsive-1by1 bg-cover"
																style={{ backgroundImage: `url(${link})` }}
															/>
														</div>
													);
												})}
											{img?.length > IMG_LIMIT && (
												<div className="col-3">
													{/* Image */}
													<div className="embed-responsive embed-responsive-1by1 bg-light">
														<a
															className="embed-responsive-item embed-responsive-item-text text-reset"
															href="#!"
														>
															<div className="font-size-xxs font-weight-bold">
																+{img.length - IMG_LIMIT} <br /> more
															</div>
														</a>
													</div>
												</div>
											)}
										</div>
									</div>
									<div className="col-12 col-lg-6">
										<div className="form-row">
											<div className="col-6">
												{/* Button */}
												<a
													className="btn btn-sm btn-block btn-outline-dark"
													href="account-order.html"
												>
													Order Details
												</a>
											</div>
											<div className="col-6">
												{/* Button */}
												<a className="btn btn-sm btn-block btn-outline-dark" href="#!">
													Track order
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			{/* Pagination */}
			<nav className="d-flex justify-content-center justify-content-md-end mt-10">
				<Pagination />
			</nav>
		</>
	);
}

export default AccountOrders;
