import React from "react";
import useTranslate from "../../../hooks/useTranslate";

const DATA = [
  {
    img: "/img/products/product-13.jpg",
    type: "Shoes",
    name: "Low top Sneakers",
    stars: 3,
    desc: `From creepeth said moved given divide make multiply of him shall itself also above second doesn't
    unto created saying land herb sea midst night wherein.`,
    customer: "Logan Edwards",
    date: "01 Jun 2019",
  },
  {
    img: "/img/products/product-14.jpg",
    type: "Dresses",
    name: "Cotton print Dress",
    stars: 5,
    desc: `God every fill great replenish darkness unto. Very open. Likeness their that light. Given under
    image to. Subdue of shall cattle day fish form saw spirit and given stars, us you whales may,
    land, saw fill unto.`,
    customer: "Jane Jefferson",
    date: "29 May 2019",
  },
  {
    img: "/img/products/product-15.jpg",
    type: "T-shirts",
    name: "Oversized print T-shirt",
    stars: 4,
    desc: `Fill his waters wherein signs likeness waters. Second light gathered appear sixth fourth, seasons
    behold creeping female.`,
    customer: "Darrell Baker",
    date: "18 May 2019",
  },
  {
    img: "/img/products/product-13.jpg",
    type: "Shoes",
    name: "Low top Sneakers",
    stars: 3,
    desc: `From creepeth said moved given divide make multiply of him shall itself also above second doesn't
    unto created saying land herb sea midst night wherein.`,
    customer: "Logan Edwards",
    date: "01 Jun 2019",
  },
  {
    img: "/img/products/product-14.jpg",
    type: "Dresses",
    name: "Cotton print Dress",
    stars: 5,
    desc: `God every fill great replenish darkness unto. Very open. Likeness their that light. Given under
    image to. Subdue of shall cattle day fish form saw spirit and given stars, us you whales may,
    land, saw fill unto.`,
    customer: "Jane Jefferson",
    date: "29 May 2019",
  },
  {
    img: "/img/products/product-15.jpg",
    type: "T-shirts",
    name: "Oversized print T-shirt",
    stars: 4,
    desc: `Fill his waters wherein signs likeness waters. Second light gathered appear sixth fourth, seasons
    behold creeping female.`,
    customer: "Darrell Baker",
    date: "18 May 2019",
  },
];

function Review() {
  /*------------------------------*/
  const { t } = useTranslate();
  /*------------------------------*/
  return (
    <section className="py-12">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 col-xl-6 text-center">
            {/* Preheading */}
            <h6 className="heading-xxs mb-3 text-gray-400">
              {t(`What buyers say`)}
            </h6>
            {/* Heading */}
            <h2 className="mb-10">{t(`Latest buyers Reviews`)}</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            {/* Slider */}
            <div data-flickity='{"pageDots": true}'>
              {DATA &&
                DATA.map((data) => {
                  let { img, type, name, stars, desc, customer, date } = data;
                  return (
                    <div className="col-12 col-sm-8 col-md-6 col-lg-4">
                      {/* Card */}
                      <div className="card-lg card border">
                        <div className="card-body">
                          {/* Header */}
                          <div className="row align-items-center mb-6">
                            <div className="col-4">
                              {/* Image */}
                              <img src={img || ''} alt="..." className="img-fluid" />
                            </div>
                            <div className="col-8 ml-n2">
                              {/* Preheading */}
                              <a
                                className="font-size-xs text-muted"
                                href="shop.html"
                              >
                                {type && t(type)}
                              </a>
                              {/* Heading */}
                              <a
                                className="d-block font-weight-bold text-body"
                                href="product.html"
                              >
                                {name && t(name)}
                              </a>
                              {/* Rating */}
                              <div
                                className="rating font-size-xxs text-warning"
                                data-value={stars}
                              >
                                <div className="rating-item">
                                  <i className="fas fa-star" />
                                </div>
                                <div className="rating-item">
                                  <i className="fas fa-star" />
                                </div>
                                <div className="rating-item">
                                  <i className="fas fa-star" />
                                </div>
                                <div className="rating-item">
                                  <i className="fas fa-star" />
                                </div>
                                <div className="rating-item">
                                  <i className="fas fa-star" />
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Blockquote */}
                          <blockquote className="mb-0">
                            <p className="text-muted">
                              {desc && t(desc)}
                            </p>
                            <footer className="font-size-xs text-muted">
                              {customer && t(customer)},{" "}
                              <time dateTime="2019-06-01">
                                {date && t(date)}
                              </time>
                            </footer>
                          </blockquote>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Review;
