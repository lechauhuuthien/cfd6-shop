import React from 'react';
import Features from '../../components/Features';

const DATA = [
	{
		img: '/img/products/product-6.jpg',
		name: 'Cotton floral print Dress',
		price: '40.00',
		size: 'M',
		color: 'Red',
	},
	{
		img: '/img/products/product-10.jpg',
		name: 'Suede cross body Bag',
		price: '49.00',
		size: '',
		color: 'Brown',
	},
];

function ShoppingCartPage() {
	return (
		<>
			<section className="pt-7 pb-12">
				<div className="container">
					<div className="row">
						<div className="col-12">
							{/* Heading */}
							<h3 className="mb-10 text-center">Shopping Cart</h3>
						</div>
					</div>
					<div className="row">
						<div className="col-12 col-md-7">
							{/* List group */}
							<ul className="list-group list-group-lg list-group-flush-x mb-6">
								{DATA &&
									DATA.map((data, i) => {
										const { img, name, price, size, color } = data;
										return (
											<li key={i} className="list-group-item">
												<div className="row align-items-center">
													<div className="col-3">
														{/* Image */}
														<a href="product.html">
															<img src={img} alt="..." className="img-fluid" />
														</a>
													</div>
													<div className="col">
														{/* Title */}
														<div className="d-flex mb-2 font-weight-bold">
															<a className="text-body" href="product.html">
																{name || ''}
															</a>{' '}
															<span className="ml-auto">${price || 0}</span>
														</div>
														{/* Text */}
														<p className="mb-7 font-size-sm text-muted">
															Size: {size || ''} <br />
															Color: {color}
														</p>
														{/*Footer */}
														<div className="d-flex align-items-center">
															{/* Select */}
															<select className="custom-select custom-select-xxs w-auto">
																<option value={1}>1</option>
																<option value={2}>2</option>
																<option value={3}>3</option>
															</select>
															{/* Remove */}
															<a className="font-size-xs text-gray-400 ml-auto" href="#!">
																<i className="fe fe-x" /> Remove
															</a>
														</div>
													</div>
												</div>
											</li>
										);
									})}
							</ul>
							{/* Footer */}
							<div className="row align-items-end justify-content-between mb-10 mb-md-0">
								<div className="col-12 col-md-7">
									{/* Coupon */}
									<form className="mb-7 mb-md-0">
										<label className="font-size-sm font-weight-bold" htmlFor="cartCouponCode">
											Coupon code:
										</label>
										<div className="row form-row">
											<div className="col">
												{/* Input */}
												<input
													className="form-control form-control-sm"
													id="cartCouponCode"
													type="text"
													placeholder="Enter coupon code*"
												/>
											</div>
											<div className="col-auto">
												{/* Button */}
												<button className="btn btn-sm btn-dark" type="submit">
													Apply
												</button>
											</div>
										</div>
									</form>
								</div>
								<div className="col-12 col-md-auto">
									{/* Button */}
									<button className="btn btn-sm btn-outline-dark">Update Cart</button>
								</div>
							</div>
						</div>
						<div className="col-12 col-md-5 col-lg-4 offset-lg-1">
							{/* Total */}
							<div className="card mb-7 bg-light">
								<div className="card-body">
									<ul className="list-group list-group-sm list-group-flush-y list-group-flush-x">
										<li className="list-group-item d-flex">
											<span>Subtotal</span> <span className="ml-auto font-size-sm">$89.00</span>
										</li>
										<li className="list-group-item d-flex">
											<span>Tax</span> <span className="ml-auto font-size-sm">$00.00</span>
										</li>
										<li className="list-group-item d-flex font-size-lg font-weight-bold">
											<span>Total</span> <span className="ml-auto font-size-sm">$89.00</span>
										</li>
										<li className="list-group-item font-size-sm text-center text-gray-500">
											Shipping cost calculated at Checkout *
										</li>
									</ul>
								</div>
							</div>
							{/* Button */}
							<a className="btn btn-block btn-dark mb-2" href="checkout.html">
								Proceed to Checkout
							</a>
							{/* Link */}
							<a className="btn btn-link btn-sm px-0 text-body" href="shop.html">
								<i className="fe fe-arrow-left mr-2" /> Continue Shopping
							</a>
						</div>
					</div>
				</div>
			</section>
			<Features />
		</>
	);
}

export default ShoppingCartPage;
