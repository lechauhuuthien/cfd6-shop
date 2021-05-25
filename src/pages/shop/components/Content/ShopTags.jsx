import React from "react";
import { ShopTag } from "../../../../components/Tags";

const TAGS = ["Shift dresses","Summer", "M", "White", "Red", "Adidas", "$10.00 - $49.00", "$50.00 - $99.00"]

function ShopTags() {
  return (
    <div className="row mb-7">
      <div className="col-12">
        {
          TAGS && TAGS.map((tag, i) => {
            return <ShopTag key={i} text={tag}/>
          })
        }
      </div>
    </div>
  );
}

export default ShopTags;
