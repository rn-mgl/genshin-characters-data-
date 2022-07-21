import React from "react";
import { useGlobalContext } from "../context";
export default function PageSelector(props) {
  const { pageLength, setCurrPage, currPage } = useGlobalContext();

  const pages = [];

  function changePage(id) {
    setCurrPage(id);
  }

  function prevPage() {
    setCurrPage((prev) => (prev - 1 >= 0 ? prev - 1 : 0));
  }

  function nextPage() {
    const end = pageLength - 1;
    setCurrPage((prev) => (prev + 1 <= end ? prev + 1 : end));
  }

  for (let i = 0; i < pageLength; i++) {
    pages.push(i);
  }

  const mappedPages = pages.map((d) => {
    return (
      <div
        onClick={() => changePage(d)}
        className={d === currPage ? "pages-square selected" : "pages-square"}
        id={d}
        key={d}
      >
        {d}
      </div>
    );
  });

  return (
    <div className="pages-square-container">
      <div className="left" onClick={prevPage}>
        <div className="arrow"></div>
      </div>
      {mappedPages}
      <div className="right" onClick={nextPage}>
        <div className="arrow"></div>
      </div>
    </div>
  );
}
