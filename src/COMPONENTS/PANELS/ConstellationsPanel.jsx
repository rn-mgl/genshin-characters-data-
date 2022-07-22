import React from "react";

export default function ConstellationsPanel({
  constellation,
  character,
  vision,
}) {
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
  const constellationImgUrl = `https://api.genshin.dev/characters/${character}/constellation`;

  if (constellation !== undefined) {
    return (
      <div className="constellation-body">
        <div className="constellation-header">CONSTELLATION</div>

        <div className="constellations-panel">
          {constellation?.map((d) => {
            return (
              <div
                key={d.name}
                className={`constellation-info-container constellation-${d.level}`}
              >
                <div
                  style={mainColor}
                  className={
                    d.level % 2 !== 0
                      ? "colored-constellation-card constellation-card-temp"
                      : "constellation-card constellation-card-temp"
                  }
                >
                  <div className="constellation-description">
                    {d.description}
                  </div>
                </div>

                <div className="constellation-card-temp">
                  <img
                    className="constellation-img"
                    src={`${constellationImgUrl}-${d.level}`}
                    onError={(e) => (
                      (e.target.onerror = null),
                      (e.target.src = `https://api.genshin.dev/characters/${character}/cosntellation-${d.level}`)
                    )}
                    alt="constellation-img"
                  />
                  <div className="constellation-name">{d.name}</div>
                  <div className="constellation-level">
                    Constellation {d.level}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
