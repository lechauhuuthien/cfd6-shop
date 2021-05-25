import React from "react";
import Questions from "./components/Questions";

const QUESTIONS = [
  {
    label: "Orders",
    questions: [
      {
        question: "Bring of had which their whose you're it own?",
        answer: `Saw wherein fruitful good days image them, midst, waters upon, saw. Seas lights seasons. Fourth
        hath rule creepeth own lesser years itself so seed fifth for grass.`,
      },
      {
        question: `Over shall air can't subdue fly divide him?`,
        answer: `Saw wherein fruitful good days image them, midst, waters upon, saw. Seas lights seasons. Fourth
          hath rule creepeth own lesser years itself so seed fifth for grass.`,
      },
      {
        question: `Waters one you'll creeping?`,
        answer: `Saw wherein fruitful good days image them, midst, waters upon, saw. Seas lights seasons. Fourth
          hath rule creepeth own lesser years itself so seed fifth for grass.`,
      },
      {
        question: `Fowl, given morning seed fruitful kind beast be?`,
        answer: `Saw wherein fruitful good days image them, midst, waters upon, saw. Seas lights seasons. Fourth
          hath rule creepeth own lesser years itself so seed fifth for grass.`,
      },
    ],
  },
  {
    label: "Shipping & Returns",
    questions: [
      {
        question: "Seas their gathered fruitful whose rule darkness?",
        answer: `Saw wherein fruitful good days image them, midst, waters upon, saw. Seas lights seasons. Fourth
        hath rule creepeth own lesser years itself so seed fifth for grass.`,
      },
      {
        question: `Evening earth replenish land that his place?`,
        answer: `Saw wherein fruitful good days image them, midst, waters upon, saw. Seas lights seasons. Fourth
          hath rule creepeth own lesser years itself so seed fifth for grass.`,
      },
      {
        question: `Waters one you'll creeping?`,
        answer: `Saw wherein fruitful good days image them, midst, waters upon, saw. Seas lights seasons. Fourth
          hath rule creepeth own lesser years itself so seed fifth for grass.`,
      },
      {
        question: `Fowl, given morning seed fruitful kind beast be?`,
        answer: `Saw wherein fruitful good days image them, midst, waters upon, saw. Seas lights seasons. Fourth
          hath rule creepeth own lesser years itself so seed fifth for grass.`,
      },
    ],
  },
  {
    label: "Payment",
    questions: [
      {
        question: "Seas their gathered fruitful whose rule darkness?",
        answer: `Saw wherein fruitful good days image them, midst, waters upon, saw. Seas lights seasons. Fourth
        hath rule creepeth own lesser years itself so seed fifth for grass.`,
      },
      {
        question: `Evening earth replenish land that his place?`,
        answer: `Saw wherein fruitful good days image them, midst, waters upon, saw. Seas lights seasons. Fourth
          hath rule creepeth own lesser years itself so seed fifth for grass.`,
      },
      {
        question: `Waters one you'll creeping?`,
        answer: `Saw wherein fruitful good days image them, midst, waters upon, saw. Seas lights seasons. Fourth
          hath rule creepeth own lesser years itself so seed fifth for grass.`,
      },
      {
        question: `Fowl, given morning seed fruitful kind beast be?`,
        answer: `Saw wherein fruitful good days image them, midst, waters upon, saw. Seas lights seasons. Fourth
          hath rule creepeth own lesser years itself so seed fifth for grass.`,
      },
    ],
  },
];

function FaqPage() {
  return (
    <section className="pt-7 pb-12">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8">
            {/* Heading */}
            <h3 className="mb-10 text-center">Frequently Asked Questionss</h3>
            {QUESTIONS &&
              QUESTIONS.map((elem, i) => {
                return <Questions key={i} {...elem} />;
              })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaqPage;
