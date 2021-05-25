import React from "react";
import useTranslate from "../../../hooks/useTranslate";

function Questions({ label, questions }) {
  /*------------------------------*/
  const { t } = useTranslate();
  /*------------------------------*/
  return (
    <>
      {/* Heading */}
      <h5 className="mb-7">{t(label)}:</h5>
      {/* List group */}
      <ul
        className="list-group list-group-flush-x mb-9"
        id="faqCollapseParentOne"
      >
        {questions &&
          questions.map((elem, i) => {
            return (
              <li key={i} className="list-group-item">
                {/* Toggle */}
                <a
                  className="dropdown-toggle d-block font-size-lg font-weight-bold text-reset"
                  data-toggle="collapse"
                  href="#faqCollapseOne"
                >
                  {i + 1}. {elem.question}
                </a>
                {/* Collapse */}
                <div
                  className="collapse"
                  id="faqCollapseOne"
                  data-parent="#faqCollapseParentOne"
                >
                  <div className="mt-5">
                    <p className="mb-0 font-size-lg text-gray-500">
                      {elem.answer}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
      </ul>
    </>
  );
}

export default Questions;
