import React, { useEffect, useState } from "react";
import ObjectDetailViewPageWrapper from "../../components/ObjectDetailViewPageWrapper";
import { useParams, useRouteMatch, Switch, Route } from "react-router-dom";
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
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";

export default function CharacterView() {
  const { id } = useParams();
  const { path, url } = useRouteMatch();

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
          <Nav fill variant="tabs" defaultActiveKey={`${url}/profile`}>
            <Nav.Item>
              <Nav.Link href={`${url}/profile`}>Profile</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1" href={`${url}/inventory`}>
                Inventory
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2" href={`${url}/skills`}>
                Skills
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="disabled" disabled>
                Equipment
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Row>
        <Row>
          <Switch>
            <Route exact path={`${path}/profile`}>
              <br />
              <CharacterViewForm character={character} onRefresh={reloadData} />
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
