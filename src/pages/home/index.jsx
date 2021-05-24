import React from "react";
import Promote from "../../components/Promote";
import BestPick from "./components/BestPick";
import Category from "./components/Category";
import Cooldown from "./components/Cooldown";
import Features from "./components/Features";
import TopSeller from "./components/TopSeller";
import Review from "./components/Review";
import Brand from "./components/Brand";

function Home() {
  return (
    <>
      <Promote text="⚡️ Happy Holiday Deals on Everything ⚡️" />
      <Category />
      <Features />
      <BestPick />
      <TopSeller />
      <Cooldown />
      <Review />
      <Brand />
    </>
  );
}

export default Home;
