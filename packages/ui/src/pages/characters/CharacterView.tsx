import React, { useEffect, useState } from "react";
import ObjectDetailViewPageWrapper from "../../components/ObjectDetailViewPageWrapper";
import { useParams, useRouteMatch, Switch, Route } from "react-router-dom";
import { isEmpty, toNumber } from "lodash";
import { CharacterWithAttributes } from "@super-cascadia-rpg/api";
import Loading from "../../components/Loading";
import fetchCharacterDataHook from "../../hooks/api/characters/fetchCharacterDataHook";
import { getCharacter } from "../../api/characters/getCharacter";
import { CharacterStateHook } from "../../hooks/store/characterStateHooks";
import { CharacterProfile } from "./views/CharacterProfile";
import { CharacterInventoryView } from "./views/CharacterInventory";
import Row from "react-bootstrap/Row";
import CharacterSubNav from "./components/CharacterSubNav";

export default function CharacterView() {
  const { id } = useParams();
  const { path } = useRouteMatch();

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
      <>
        <Row>
          <CharacterSubNav />
        </Row>
        <Row>
          <Switch>
            <Route exact path={`${path}/profile`}>
              <CharacterProfile character={character} onRefresh={reloadData} />
            </Route>
            <Route exact path={`${path}/inventory`}>
              <CharacterInventoryView character={character} />
            </Route>
          </Switch>
        </Row>
      </>
    </ObjectDetailViewPageWrapper>
  );
}
