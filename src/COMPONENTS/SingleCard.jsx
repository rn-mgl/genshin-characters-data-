import React from "react";

export default function SingleCard({ name }) {
  let imgSrc = "";

  if (name === "thoma") {
    imgSrc = `https://api.genshin.dev/characters/${name}/icon`;
  } else if (
    name === "traveler-anemo" ||
    name === "traveler-geo" ||
    name === "traveler-electro"
  ) {
    imgSrc = `https://api.genshin.dev/characters/${name}/icon-big-lumine`;
  } else {
    imgSrc = `https://api.genshin.dev/characters/${name}/icon-big`;
  }

  return (
    <div className="card-body">
      <div className="profile-img-container">
        <img className="profile-img" src={imgSrc} alt="" />
      </div>
      <div className="card-name">{name}</div>
    </div>
  );
}
