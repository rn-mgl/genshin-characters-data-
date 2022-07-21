import React from "react";
import { useParams } from "react-router-dom";
import Loading from "../COMPONENTS/Loading";
import { useGlobalContext } from "../context";
import PersonalInfo from "../COMPONENTS/PANELS/PersonalInfo";
import ConstellationsPanel from "../COMPONENTS/PANELS/ConstellationsPanel";
import TalentsPanel from "../COMPONENTS/PANELS/TalentsPanel";

export default function CharacterPage() {
  const { character } = useParams();
  const { imgSrc, characterData } = useGlobalContext();
  const [loading, setLoading] = React.useState(false);
  const [currData, setCharacterData] = React.useState([]);

  React.useEffect(() => {
    if (characterData[character] === undefined) {
      async function getCharacterData() {
        setLoading(true);
        try {
          const res = await fetch(
            `https://api.genshin.dev/characters/${character}`
          );
          const data = await res.json();
          if (data) {
            setCharacterData(data);
            characterData[character] = data;
          } else {
            setCharacterData([]);
          }
        } catch (error) {
          console.log(error);
        }
        setLoading(false);
      }
      getCharacterData();
    } else {
      setCharacterData(characterData[character]);
    }
  }, [character, characterData]);

  if (loading) {
    return <Loading />;
  }

  return (
    <React.Fragment>
      <div className="character-profile-page">
        <PersonalInfo
          img={imgSrc[character]}
          name={currData.name}
          vision={currData.vision}
          weapon={currData.weapon}
          nation={currData.nation}
          affiliation={currData.affiliation}
          birthday={currData.birthday}
          constellation={currData.constellation}
          rarity={currData.rarity}
          description={currData.description}
        />

        <ConstellationsPanel
          constellation={currData.constellations}
          character={character}
          vision={currData.vision}
        />

        <TalentsPanel
          character={character}
          passive={currData.passiveTalents}
          skill={currData.skillTalents}
          vision={currData.vision}
        />
      </div>
    </React.Fragment>
  );
}
