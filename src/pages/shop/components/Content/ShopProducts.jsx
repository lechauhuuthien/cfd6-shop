import React from "react";
import ProductItem from "../../../../components/ProductItem";

const DATA = [
  {
    img: {
      back: "/img/products/product-120.jpg",
      front: "/img/products/product-5.jpg",
    },
    status: "new",
    type: "Shoes",
    name: "Leather mid-heel Sandals",
    price: "129.00",
    discountPrice: "",
  },
  {
    img: {
      back: "/img/products/product-121.jpg",
      front: "/img/products/product-6.jpg",
    },
    status: "",
    type: "Dresses",
    name: "Cotton floral print Dress",
    price: "40.00",
    discountPrice: "",
  },
  {
    img: {
      back: "/img/products/product-122.jpg",
      front: "/img/products/product-7.jpg",
    },
    status: "sale",
    type: "Shoes",
    name: "Leather Sneakers",
    price: "85.00",
    discountPrice: "85.00",
  },
  {
    img: {
      back: "",
      front: "/img/products/product-8.jpg",
    },
    status: "",
    type: "Tops",
    name: "Cropped cotton Top",
    price: "29.00",
    discountPrice: "",
  },
  {
    img: {
      back: "/img/products/product-120.jpg",
      front: "/img/products/product-5.jpg",
    },
    status: "new",
    type: "Shoes",
    name: "Leather mid-heel Sandals",
    price: "129.00",
    discountPrice: "",
  },
  {
    img: {
      back: "/img/products/product-121.jpg",
      front: "/img/products/product-6.jpg",
    },
    status: "",
    type: "Dresses",
    name: "Cotton floral print Dress",
    price: "40.00",
    discountPrice: "",
  },
  {
    img: {
      back: "/img/products/product-122.jpg",
      front: "/img/products/product-7.jpg",
    },
    status: "sale",
    type: "Shoes",
    name: "Leather Sneakers",
    price: "85.00",
    discountPrice: "85.00",
  },
  {
    img: {
      back: "",
      front: "/img/products/product-8.jpg",
    },
    status: "",
    type: "Tops",
    name: "Cropped cotton Top",
    price: "29.00",
    discountPrice: "",
  },
  {
    img: {
      back: "/img/products/product-120.jpg",
      front: "/img/products/product-5.jpg",
    },
    status: "new",
    type: "Shoes",
    name: "Leather mid-heel Sandals",
    price: "129.00",
    discountPrice: "",
  },
  {
    img: {
      back: "/img/products/product-121.jpg",
      front: "/img/products/product-6.jpg",
    },
    status: "",
    type: "Dresses",
    name: "Cotton floral print Dress",
    price: "40.00",
    discountPrice: "",
  },
];

function ShopProducts() {
  return (
    <div className="row">
      {DATA &&
        DATA.map((data, i) => {
          return (
            <div key={i} className="col-6 col-md-4">
              <ProductItem {...data} />
            </div>
          );
        })}
    </div>
  );
}

export default ShopProducts;
