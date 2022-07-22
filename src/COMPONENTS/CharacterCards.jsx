import React from "react";
import { useGlobalContext } from "../context";
import SingleCard from "./SingleCard";
import { Link } from "react-router-dom";

export default function CharacterCards() {
  const { characters, currPage } = useGlobalContext();

  const end = (currPage + 1) * 10;
  const start = end - 10;

  const pagedChars = characters.slice(start, end);

  return (
    <div className="cards-container">
      {pagedChars?.map((d) => {
        if (d !== "yae-miko")
          return (
            <Link key={d} to={`/${d}`} className="link-text">
              <SingleCard id={d} name={d} />
            </Link>
          );
      })}
    </div>
  );
}
