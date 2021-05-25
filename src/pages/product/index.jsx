import React from 'react';
import Features from '../../components/Features';
import ProductDesc from './components/ProductDescription';
import ProductDetail from './components/ProductDetail';
import ProductReview from './components/ProductReview';
import RelatedProduct from './components/RelatedProduct';

function ProductPage() {
	return (
		<>
			<ProductDetail />
			<ProductDesc />
			<RelatedProduct />
			<ProductReview />
			<Features />
		</>
	);
}

export default ProductPage;
