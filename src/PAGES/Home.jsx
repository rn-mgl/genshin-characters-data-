import React from "react";
import PageSelector from "../COMPONENTS/PageSelector";
import CharacterCards from "../COMPONENTS/CharacterCards";
import { useGlobalContext } from "../context";
import Loading from "../COMPONENTS/Loading";

export default function Home() {
  const { loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="header">Character Profiles</div>
      <div className="character-page">
        <CharacterCards />
      </div>
      <PageSelector />
    </div>
  );
}
