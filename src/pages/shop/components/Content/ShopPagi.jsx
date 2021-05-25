import React from "react";

function ShopPagi() {
  return (
    <nav class="d-flex justify-content-center justify-content-md-end">
      <ul class="pagination pagination-sm text-gray-400">
        <li class="page-item">
          <a class="page-link page-link-arrow" href="#">
            <i class="fa fa-caret-left"></i>
          </a>
        </li>
        <li class="page-item active">
          <a class="page-link" href="#">
            1
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">
            2
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">
            3
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">
            4
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">
            5
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">
            6
          </a>
        </li>
        <li class="page-item">
          <a class="page-link page-link-arrow" href="#">
            <i class="fa fa-caret-right"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default ShopPagi;
