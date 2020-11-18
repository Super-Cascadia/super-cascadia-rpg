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
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import { LinkContainer } from "react-router-bootstrap";

function CharacterSubNav() {
  const { url, path } = useRouteMatch();

  let activeKey = `${url}/${path}`;

  console.log("active-key", activeKey);
  return (
    <Nav
      fill
      variant="tabs"
      defaultActiveKey={`${url}/profile`}
      activeKey={activeKey}
    >
      <Nav.Item>
        <LinkContainer to={`${url}/profile`}>
          <Nav.Link href={`${url}/profile`}>Profile</Nav.Link>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer to={`${url}/inventory`}>
          <Nav.Link href={`${url}/inventory`}>Inventory</Nav.Link>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer to={`${url}/skills`}>
          <Nav.Link disabled>Skills</Nav.Link>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer to={`${url}/equipment`}>
          <Nav.Link disabled>Equipment</Nav.Link>
        </LinkContainer>
      </Nav.Item>
    </Nav>
  );
}

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
