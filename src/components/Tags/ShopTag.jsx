import React, { Fragment } from "react";
import useTranslate from "../../hooks/useTranslate";

export function ShopTag({ text, onDelete }) {
  /*------------------------------*/
  const { t } = useTranslate();
  /*------------------------------*/
  if (!text) return <Fragment />;
  return (
    <span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
      {t(text)}
      <a
        className="text-reset ml-2"
        href="#!"
        role="button"
        onClick={(e) => {
          e.preventDefault();
          onDelete && onDelete();
        }}
      >
        <i className="fe fe-x" />
      </a>
    </span>
  );
}
