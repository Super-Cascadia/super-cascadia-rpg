import React, { useEffect, useState } from "react";
import GridPageWrapper from "../../../components/GridPageWrapper";
import { CharactersTable } from "./components/CharactersTable";
import fetchCharactersDataHook from "../../../hooks/api/characters/fetchCharactersDataHook";

export default function CharacterGrid() {
  const [isLoading, setLoadingState] = useState<boolean>(true);
  const [characterData, setItemData] = useState<[]>([]);

  const fetchCharacters = fetchCharactersDataHook(setItemData, setLoadingState);

  // @ts-ignore
  useEffect(fetchCharacters, []);

  return (
    <div>
      <GridPageWrapper
        title={"Characters"}
        gridItemCount={0}
        createLink={`/characters/create`}
      >
        <CharactersTable isLoading={false} characters={characterData} />
      </GridPageWrapper>
    </div>
  );
}
