import React from "react";

export default function TalentsPanel({ passive, skill, vision, character }) {
  const talentImgUrl = `https://api.genshin.dev/characters/${character}`;

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

  const [visible, setVisible] = React.useState("");

  function showInfo(id, e) {
    if (id === visible) {
      setVisible("");
      e.target.className = "see-more-btn";
      return;
    } else if (visible !== "") {
      return;
    } else {
      e.target.className = "see-more-btn info-visible";
      setVisible(id);
    }
  }

  if (passive !== undefined && skill !== undefined) {
    return (
      <div className="talents-body">
        <div className="talents-header">TALENTS</div>
        <div className="talents-panel">
          <div className="passive-skill-header">PASSIVE</div>
          <div className="passive-container">
            <div className="passive-images">
              <img
                style={mainColor}
                className="talent-img"
                src={`${talentImgUrl}/talent-passive-2`}
                alt="passive-img"
              />

              <img
                style={mainColor}
                className="talent-img"
                src={`${talentImgUrl}/talent-passive-1`}
                alt="passive-img"
              />

              {!character.startsWith("traveler") && (
                <img
                  style={mainColor}
                  className="talent-img"
                  src={`${talentImgUrl}/talent-passive-0`}
                  alt="passive-img"
                />
              )}

              {passive.length > 3 && (
                <img
                  style={mainColor}
                  className="talent-img"
                  src={`${talentImgUrl}/talent-passive-misc`}
                  alt="passive-img"
                />
              )}
            </div>
            <div className="passive-texts-container">
              {passive?.map((d) => {
                return (
                  <div className="per-passive" key={d.name}>
                    <div className="passive-name">{d.name}</div>
                    <div className="passive-unlock">{d.unlock}</div>
                    <div
                      style={mainColor}
                      onClick={(e) => showInfo(d.name, e)}
                      className="see-more-btn"
                      disabled={visible !== d.name}
                    >
                      {visible === d.name ? `${d.description}` : "See More"}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="passive-skill-header">SKILL</div>
          <div className="skill-container">
            <div className="skill-images">
              <img
                style={mainColor}
                className="talent-img"
                src={`${talentImgUrl}/talent-na`}
                onError={(e) => (
                  (e.target.onerror = null),
                  (e.target.src = `${talentImgUrl}/talent_na`)
                )}
                alt="skill-img"
              />
              <img
                style={mainColor}
                className="talent-img"
                src={`${talentImgUrl}/talent-skill`}
                onError={(e) => (
                  (e.target.onerror = null),
                  (e.target.src = `${talentImgUrl}/talent_skill`)
                )}
                alt="skill-img"
              />
              <img
                style={mainColor}
                className="talent-img"
                src={`${talentImgUrl}/talent-burst`}
                onError={(e) => (
                  (e.target.onerror = null),
                  (e.target.src = `${talentImgUrl}/talent_burst`)
                )}
                alt="skill-img"
              />
              {skill.length > 3 && (
                <img
                  style={mainColor}
                  className="talent-img"
                  src={`${talentImgUrl}/talent-passive-misc`}
                  alt="skill-img"
                />
              )}
            </div>
            <div className="skill-texts-container">
              {skill?.map((d) => {
                return (
                  <div className="per-skill" key={d.name}>
                    <div className="skill-name">{d.name}</div>
                    <div>{d.unlock}</div>

                    <div
                      style={mainColor}
                      onClick={(e) => showInfo(d.name, e)}
                      className="see-more-btn"
                      disabled={visible !== d.name}
                    >
                      {visible === d.name ? `${d.description}` : "See More"}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
