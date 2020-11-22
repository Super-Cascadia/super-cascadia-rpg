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
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import ProgressBar from "react-bootstrap/ProgressBar";
import profile from "../../images/profile.jpeg";

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
      <Row>
        <Col lg="2">
          <Card>
            <Card.Body>
              <Row>
                <Col xs={6} md={4}>
                  <Image src={profile} rounded width="200" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <hr />
                  <ProgressBar
                    variant="success"
                    now={80}
                    label={`${80} / 100`}
                  />
                  <p>Health</p>
                  <ProgressBar variant="info" now={100} label={`${10} / 10`} />
                  <p>Mana</p>
                  <ProgressBar
                    variant="warning"
                    now={40}
                    label={`${40} / 100`}
                  />
                  <p>Experience</p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="10">
          <Row>
            <CharacterSubNav />
          </Row>
          <Row>
            <Switch>
              <Route exact path={`${path}/profile`}>
                <CharacterProfile
                  character={character}
                  onRefresh={reloadData}
                />
              </Route>
              <Route exact path={`${path}/inventory`}>
                <CharacterInventoryView character={character} />
              </Route>
            </Switch>
          </Row>
        </Col>
      </Row>
    </ObjectDetailViewPageWrapper>
  );
}
