import React from "react";

function AboutStory({ isReverse }) {
  return (
    <section className="py-12">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          {isReverse ? (
            <>
              <div className="col-12 col-md-6 order-md-2 text-right">
                {/* Image */}
                <img
                  src="/img/products/product-36.jpg"
                  alt="..."
                  className="img-fluid w-50"
                />
                {/* Image */}
                <div className="text-left mt-n13 mt-lg-n15 mb-10 mb-md-0">
                  <img
                    src="/img/products/product-37.jpg"
                    alt="..."
                    className="img-fluid w-75"
                  />
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-5 order-md-1">
                {/* Preheading */}
                <h6 className="heading-xxs mb-3 text-gray-400">Who we are</h6>
                {/* Heading */}
                <h2 className="mb-7">Our Story</h2>
                {/* Text */}
                <p className="font-size-lg text-muted">
                  Behold divided hath without. Place dominion. Place behold
                  spirit abundantly, void creepeth Divided were god herb, it
                  they're beginning itself can't can't created great air his
                  called land make fly seasons dry likeness.
                </p>
                <p className="mb-0 font-size-lg text-muted">
                  Fish upon you you'll midst waters. Divided had life years to
                  own gathering replenish seasons Great meat. Cattle earth were
                  signs winged so image together also.
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="col-12 col-md-6">
                {/* Image */}
                <img
                  src="/img/products/product-62.jpg"
                  alt="..."
                  className="img-fluid w-50"
                />
                {/* Image */}
                <div className="text-right mt-n13 mt-lg-n15 mb-10 mb-md-0">
                  <img
                    src="/img/products/product-63.jpg"
                    alt="..."
                    className="img-fluid w-75"
                  />
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-5">
                {/* Preheading */}
                <h6 className="heading-xxs mb-3 text-gray-400">Our story</h6>
                {/* Heading */}
                <h2 className="mb-7">About our Store</h2>
                {/* Text */}
                <p className="font-size-lg text-muted">
                  Open created shall two he second moving whose. He face whose
                  two upon, fowl behold waters. Fly there their day creepeth.
                  Darkness beginning spirit after. Creepeth subdue. Brought may,
                  first. Under living that.
                </p>
                <p className="mb-0 font-size-lg text-muted">
                  Third. For morning whales saw were had seed can't divide it
                  light shall moveth, us blessed given wherein.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default AboutStory;
