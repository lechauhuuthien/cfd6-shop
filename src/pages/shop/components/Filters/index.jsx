import React from "react";
import BrandFilter from "./BrandFilter";
import CategoryFilter from "./CategoryFilter";
import ColorFilter from "./ColorFilter";
import PriceFilter from "./PriceFilter";
import SeasonFilter from "./SeasonFilter";
import SizeFilter from "./SizeFilter";

function ShopFilters() {
  return (
    <div className="col-12 col-md-4 col-lg-3">
      <form className="mb-10 mb-md-0">
        <ul className="nav nav-vertical" id="filterNav">
          <CategoryFilter />
          <SeasonFilter />
          <SizeFilter />
          <ColorFilter />
          <BrandFilter />
          <PriceFilter />
        </ul>
      </form>
    </div>
  );
}

export default ShopFilters;
