import React from "react";
import useTranslate from "../../hooks/useTranslate";

function ProductItem({ img, status, type, name, price, discountPrice }) {
  /*------------------------------*/
  const { t } = useTranslate();
  /*------------------------------*/
  return (
      <div className="card mb-7">
        {/* Badge */}
        {status && (
          <div
            className={`badge badge-${
              status === "new" ? "white" : "dark"
            } card-badge card-badge-left text-uppercase`}
          >
            {t(status)}
          </div>
        )}
        {/* Image */}
        <div className="card-img">
          {/* Image */}
          <a
            className={`${!img?.front || !img?.back ? "" : "card-img-hover"}`}
            href="product.html"
          >
            {img?.back && (
              <img
                className="card-img-top card-img-back"
                src={img.back}
                alt="..."
              />
            )}
            {img?.front && (
              <img
                className="card-img-top card-img-front"
                src={img.front}
                alt="..."
              />
            )}
          </a>
          {/* Actions */}
          <div className="card-actions">
            <span className="card-action">
              <button
                className="btn btn-xs btn-circle btn-white-primary"
                data-toggle="modal"
                data-target="#modalProduct"
              >
                <i className="fe fe-eye" />
              </button>
            </span>
            <span className="card-action">
              <button
                className="btn btn-xs btn-circle btn-white-primary"
                data-toggle="button"
              >
                <i className="fe fe-shopping-cart" />
              </button>
            </span>
            <span className="card-action">
              <button
                className="btn btn-xs btn-circle btn-white-primary"
                data-toggle="button"
              >
                <i className="fe fe-heart" />
              </button>
            </span>
          </div>
        </div>
        {/* Body */}
        <div className="card-body px-0">
          {/* Category */}
          <div className="font-size-xs">
            <a className="text-muted" href="shop.html">
              {t(type)}
            </a>
          </div>
          {/* Title */}
          <div className="font-weight-bold">
            <a className="text-body" href="product.html">
              {name}
            </a>
          </div>
          {/* Price */}
          <div className="font-weight-bold">
            <span className="font-size-xs text-gray-350 text-decoration-line-through">
              ${price || 0}
            </span>
            {discountPrice && (
              <span className="text-primary">${discountPrice || 0}</span>
            )}
          </div>
        </div>
      </div>
  );
}

export default ProductItem;
