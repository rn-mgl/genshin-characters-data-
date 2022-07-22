import React from "react";

const url = "https://api.genshin.dev/characters";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [characters, setCharacters] = React.useState([]);
  const [currPage, setCurrPage] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const imgSrc = React.useMemo(() => [], []);

  let characterData = {};
  let pageLength = 0;

  const getCharacters = React.useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();

      if (data) {
        setCharacters(data);
      } else {
        setCharacters([]);
      }
    } catch {
      console.log(Error);
    }
    setLoading(false);
  }, []);

  React.useEffect(() => {
    getCharacters();
  }, [getCharacters]);

  React.useMemo(() => {
    if (characters.length > 0) {
      characters?.forEach((character) => {
        if (character.startsWith("traveler") || character === "thoma") {
          imgSrc[
            character
          ] = `https://api.genshin.dev/characters/${character}/portrait`;
        } else {
          imgSrc[
            character
          ] = `https://api.genshin.dev/characters/${character}/gacha-splash`;
        }
      });
    }
  }, [characters, imgSrc]);

  pageLength = Math.ceil(characters.length / 10);

  return (
    <AppContext.Provider
      value={{
        characters,
        currPage,
        imgSrc,
        characterData,
        pageLength,
        loading,
        setCurrPage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return React.useContext(AppContext);
};

export { AppContext, AppProvider };
