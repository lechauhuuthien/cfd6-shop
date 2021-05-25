import React from "react";
import ShopHeader from "./ShopHeader";
import ShopPagi from "./ShopPagi";
import ShopProducts from "./ShopProducts";
import ShopSlider from "./ShopSlider";
import ShopTags from "./ShopTags";

function ShopContent() {
  return (
    <div className="col-12 col-md-8 col-lg-9">
      <ShopSlider />
      <ShopHeader />
      <ShopTags />
      <ShopProducts />
      <ShopPagi />
    </div>
  );
}

export default ShopContent;
