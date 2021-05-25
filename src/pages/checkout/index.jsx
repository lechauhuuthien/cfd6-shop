import React from "react";
import BillingForm from "./components/BillingForm";
import CheckoutItems from "./components/CheckoutItems";

function CheckoutPage() {
  return (
    <section className="pt-7 pb-12">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            {/* Heading */}
            <h3 className="mb-4">Checkout</h3>
            {/* Subheading */}
            <p className="mb-10">
              Already have an account?{" "}
              <a className="font-weight-bold text-reset" href="#!">
                Click here to login
              </a>
            </p>
          </div>
        </div>
        <div className="row">
            <BillingForm />
            <CheckoutItems />
        </div>
      </div>
    </section>
  );
}

export default CheckoutPage;
