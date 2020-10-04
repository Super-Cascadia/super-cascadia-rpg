import React, { useEffect, useState } from "react";
import DetailPageWrapper from "../../components/DetailPageWrapper";
import { useParams } from "react-router-dom";
import { isEmpty, toNumber } from "lodash";
import { CharacterModel } from "@super-cascadia-rpg/api";
import Loading from "../../components/Loading";
import fetchCharacterDataHook from "../../hooks/api/characters/fetchCharacterDataHook";

interface characterEditState {
  character: CharacterModel;
}

type CharacterStateHook = [characterEditState, (data: any) => void];

export default function CharacterView() {
  const { id } = useParams();
  const [data, setData]: CharacterStateHook = useState({
    character: {} as CharacterModel,
  });

  const { character } = data;

  // @ts-ignore
  useEffect(fetchCharacterDataHook(id, setData), {});

  if (isEmpty(character)) {
    return <Loading />;
  }

  return (
    <DetailPageWrapper
      objectId={toNumber(id)}
      name={"foo"}
      routeName={"characters"}
    >
      <div>Form goes here</div>
    </DetailPageWrapper>
  );
}
