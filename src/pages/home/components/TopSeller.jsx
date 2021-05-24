import React from "react";
import ProductItem from "../../../components/ProductItem";
import useTranslate from "../../../hooks/useTranslate";

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
];

function TopSeller() {
    /*------------------------------*/
    const { t } = useTranslate();
    /*------------------------------*/
  return (
    <section className="py-12">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 col-xl-6">
            {/* Heading */}
            <h2 className="mb-4 text-center">{t(`Top month Sellers`)}</h2>
            {/* Nav */}
            <div className="nav justify-content-center mb-10">
              <a
                className="nav-link active"
                href="#topSellersTab"
                data-toggle="tab"
              >
                {t(`Women`)}
              </a>
              <a className="nav-link" href="#topSellersTab" data-toggle="tab">
                {t(`Men`)}
              </a>
              <a className="nav-link" href="#topSellersTab" data-toggle="tab">
                {t(`Kids`)}
              </a>
            </div>
          </div>
        </div>
        <div className="tab-content">
          <div className="tab-pane fade show active" id="topSellersTab">
            <div className="row">
              {DATA &&
                DATA.map((data) => {
                  return <ProductItem {...data} />;
                })}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            {/* Link  */}
            <div className="mt-7 text-center">
              <a className="link-underline" href="#!">
                {t(`Discover more`)}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopSeller;
