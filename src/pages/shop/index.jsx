import React from "react";
import Promote from "../../components/Promote";
import ShopContent from "./components/Content";
import ShopFilters from "./components/Filters";

function ShopPage() {
  return (
    <>
      <Promote text="⚡️ Happy Holiday Deals on Everything ⚡️" />
      <section class="py-11">
        <div class="container">
          <div class="row">
            <ShopFilters />
            <ShopContent />
          </div>
        </div>
      </section>
    </>
  );
}

export default ShopPage;
