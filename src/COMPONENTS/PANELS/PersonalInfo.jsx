import React from "react";
import { ReactComponent as HomeBtn } from "../IMG/HOME BTN.svg";
import { Link } from "react-router-dom";

export default function PersonalInfo(props) {
  const vision = props.vision;

  const mainColor = {
    background:
      vision === "Cryo"
        ? "#79C6E8"
        : vision === "Hydro"
        ? "#6997BF"
        : vision === "Electro"
        ? "#a6abc6"
        : vision === "Pyro"
        ? "#f29979"
        : vision === "Geo"
        ? "#f2b263"
        : vision === "Anemo"
        ? "#539e99"
        : "#d9d9d9",
  };

  if (props.name !== undefined) {
    const charName =
      props.name.startsWith("Sangonomiya") ||
      props.name.startsWith("Kamisato") ||
      props.name.startsWith("Arataki")
        ? props.name.split(" ")[1]
        : props.name.startsWith("Raiden")
        ? props.name.split(" ")[0]
        : props.name;
    return (
      <React.Fragment>
        <Link className="home-btn" to="/">
          <HomeBtn className="home-icon" />
        </Link>
        <div className="personal-info-panel">
          <div className="character-main-info-container">
            <div className="name-and-description-container">
              <div className="name">{charName}</div>
              <div className="description">{props.description}</div>
            </div>
            <img
              className="character-page-img"
              src={props.img}
              alt="character-img"
            />
          </div>

          <div style={mainColor} className="divider"></div>

          <div className="text-info-container">
            <span className="info-container">
              <div style={mainColor} className="bar">
                Vision
              </div>
              <div className="vision info-text">{props.vision}</div>
            </span>
            <div className="info-container">
              <span style={mainColor} className="bar">
                Weapon
              </span>
              <span className="weapon info-text">{props.weapon}</span>
            </div>
            <div className="info-container">
              <span style={mainColor} className="bar">
                Nation
              </span>
              <span className="nation info-text">{props.nation}</span>
            </div>
            <div className="info-container">
              <span style={mainColor} className="bar">
                Affiliation
              </span>
              <span className="affiliation info-text">
                {props.name === "Traveler" ? "--" : props.affiliation}
              </span>
            </div>
            <div className="info-container">
              <span style={mainColor} className="bar">
                Birthday
              </span>
              <span className="birthday info-text">
                <span className="affiliation info-text">
                  {props.name === "Traveler" ? "--" : props.birthday}
                </span>
              </span>
            </div>
            <div className="info-container">
              <span style={mainColor} className="bar">
                Constellation
              </span>
              <span className="constellation info-text">
                {props.constellation}
              </span>
            </div>
            <div className="info-container">
              <span style={mainColor} className="bar">
                Rarity
              </span>
              <span className="rarity info-text">{props.rarity}</span>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
