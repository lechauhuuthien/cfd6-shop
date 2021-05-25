import React from 'react';
import DetailContent from './DetailContent';
import DetailSlider from './DetailSlider';

function ProductDetail() {
	return (
		<section>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="row">
							<DetailSlider />
							<DetailContent />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ProductDetail;
