import React from "react";
import { ReactComponent as Loader } from "../COMPONENTS/IMG/GENSHIN LOADING.svg";

export default function Loading() {
  return (
    <div>
      <Loader className="loader" />
      <div className="blur"></div>
    </div>
  );
}
