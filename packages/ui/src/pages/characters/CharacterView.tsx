import React, { useEffect, useState } from "react";
import ObjectDetailViewPageWrapper from "../../components/ObjectDetailViewPageWrapper";
import { useParams } from "react-router-dom";
import { isEmpty, toNumber } from "lodash";
import { CharacterWithAttributes } from "@super-cascadia-rpg/api";
import Loading from "../../components/Loading";
import fetchCharacterDataHook from "../../hooks/api/characters/fetchCharacterDataHook";
import { getCharacter } from "../../api/characters/getCharacter";
import { CharacterStateHook } from "../../hooks/store/characterStateHooks";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { CharacterViewForm } from "./views/CharacterProfile";
import { CharacterInventoryView } from "./views/CharacterInventory";

export default function CharacterView() {
  const { id } = useParams();
  const [data, setData]: CharacterStateHook = useState({
    character: {} as CharacterWithAttributes,
  });

  const { character } = data;

  useEffect(
    fetchCharacterDataHook(
      { id: toNumber(id), includeAttributes: true },
      setData
    ),
    // @ts-ignore
    {}
  );

  const reloadData = () => {
    getCharacter(toNumber(id), true).then((data) => {
      setData({
        character: data,
      });
    });
  };

  if (isEmpty(character)) {
    return <Loading />;
  }

  return (
    <ObjectDetailViewPageWrapper
      objectId={toNumber(id)}
      name={`${character.firstName} ${character.lastName}`}
      routeName={"characters"}
    >
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="profile" title="Profile">
          <br />
          <CharacterViewForm character={character} onRefresh={reloadData} />
        </Tab>
        <Tab eventKey="inventory" title="Inventory">
          <CharacterInventoryView character={character} />
        </Tab>
        <Tab eventKey="skills" title="Skills" disabled></Tab>
        <Tab eventKey="equipment" title="Equipment" disabled></Tab>
      </Tabs>
    </ObjectDetailViewPageWrapper>
  );
}
