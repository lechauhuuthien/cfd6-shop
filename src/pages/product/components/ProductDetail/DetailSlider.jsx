import React from 'react';

function DetailSlider() {
	return (
		<div className="col-12 col-md-6">
			<div className="card">
				<div className="badge badge-primary card-badge text-uppercase">Sale</div>
				<div className="mb-4" data-flickity='{"draggable": false, "fade": true}' id="productSlider">
					<a href="/img/products/product-7.jpg" data-fancybox>
						<img src="/img/products/product-7.jpg" alt="..." className="card-img-top" />
					</a>
					<a href="/img/products/product-122.jpg" data-fancybox>
						<img src="/img/products/product-122.jpg" alt="..." className="card-img-top" />
					</a>
					<a href="/img/products/product-146.jpg" data-fancybox>
						<img src="/img/products/product-146.jpg" alt="..." className="card-img-top" />
					</a>
				</div>
			</div>
			<div
				className="flickity-nav mx-n2 mb-10 mb-md-0"
				data-flickity='{"asNavFor": "#productSlider", "contain": true, "wrapAround": false}'
			>
				<div className="col-12 px-2" style={{ maxWidth: '113px' }}>
					<div
						className="embed-responsive embed-responsive-1by1 bg-cover"
						style={{
							backgroundImage: 'url(/img/products/product-7.jpg)',
						}}
					/>
				</div>
				<div className="col-12 px-2" style={{ maxWidth: '113px' }}>
					<div
						className="embed-responsive embed-responsive-1by1 bg-cover"
						style={{
							backgroundImage: 'url(/img/products/product-122.jpg)',
						}}
					/>
				</div>
				<div className="col-12 px-2" style={{ maxWidth: '113px' }}>
					<div
						className="embed-responsive embed-responsive-1by1 bg-cover"
						style={{
							backgroundImage: 'url(/img/products/product-146.jpg)',
						}}
					/>
				</div>
			</div>
		</div>
	);
}

export default DetailSlider;
