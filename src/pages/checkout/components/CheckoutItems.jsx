import React from "react";
import useTranslate from "../../../hooks/useTranslate";

const DATA = [
  {
    img: "/img/products/product-6.jpg",
    name: "Cotton floral print Dress",
    price: "40.00",
    size: "M",
    color: "Red",
  },
  {
    img: "/img/products/product-10.jpg",
    name: "Suede cross body Bag",
    price: "49.00",
    size: "",
    color: "Brown",
  },
];

function CheckoutItems() {
  /*------------------------------*/
  const { t } = useTranslate();
  /*------------------------------*/
  return (
    <div className="col-12 col-md-5 col-lg-4 offset-lg-1">
      {/* Heading */}
      <h6 className="mb-7">Order Items ({DATA.length})</h6>
      {/* Divider */}
      <hr className="my-7" />
      {/* List group */}
      <ul className="list-group list-group-lg list-group-flush-y list-group-flush-x mb-7">
        {DATA &&
          DATA.map((data, i) => {
            const { img, name, price, size, color } = data;
            return (
              <li key={i} className="list-group-item">
                <div className="row align-items-center">
                  <div className="col-4">
                    {/* Image */}
                    <a href="product.html">
                      <img src={img} alt="..." className="img-fluid" />
                    </a>
                  </div>
                  <div className="col">
                    {/* Title */}
                    <p className="mb-4 font-size-sm font-weight-bold">
                      <a className="text-body" href="product.html">
                        {t(name)}
                      </a>{" "}
                      <br />
                      <span className="text-muted">${price}</span>
                    </p>
                    {/* Text */}
                    <div className="font-size-sm text-muted">
                      {t(`Size`)}: {size} <br />
                      {t(`Color`)}: {color}
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
      </ul>
      {/* Card */}
      <div className="card mb-9 bg-light">
        <div className="card-body">
          <ul className="list-group list-group-sm list-group-flush-y list-group-flush-x">
            <li className="list-group-item d-flex">
              <span>{t(`Subtotal`)}</span>{" "}
              <span className="ml-auto font-size-sm">$89.00</span>
            </li>
            <li className="list-group-item d-flex">
              <span>{t(`Tax`)}</span>{" "}
              <span className="ml-auto font-size-sm">$00.00</span>
            </li>
            <li className="list-group-item d-flex">
              <span>{t(`Shipping`)}</span>{" "}
              <span className="ml-auto font-size-sm">$8.00</span>
            </li>
            <li className="list-group-item d-flex font-size-lg font-weight-bold">
              <span>{t(`Total`)}</span> <span className="ml-auto">$97.00</span>
            </li>
          </ul>
        </div>
      </div>
      {/* Disclaimer */}
      <p className="mb-7 font-size-xs text-gray-500">
        {t(`Your personal data will be used to process your order, support your
        experience throughout this website, and for other purposes described in
        our privacy policy.`)}
      </p>
      {/* Button */}
      <button className="btn btn-block btn-dark">{t(`Place Order`)}</button>
    </div>
  );
}

export default CheckoutItems;
