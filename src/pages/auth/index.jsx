import React from "react";
import NewForm from "./components/NewForm";
import ReturnForm from "./components/ReturnForm";

function AuthPage() {
  return (
    <section className="py-12">
      <div className="container">
        <div className="row">
          <ReturnForm />
          <NewForm />
        </div>
      </div>
    </section>
  );
}

export default AuthPage;
