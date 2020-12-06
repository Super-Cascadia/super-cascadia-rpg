import React, { useEffect, useState } from "react";
import ObjectDetailViewPageWrapper from "../../components/pageWrapper/ObjectDetailViewPageWrapper";
import { useParams, useRouteMatch, Switch, Route } from "react-router-dom";
import { isEmpty, toNumber } from "lodash";
import { CharacterWithAttributes } from "@super-cascadia-rpg/api";
import Loading from "../../components/indicators/Loading";
import fetchCharacterDataHook from "../../hooks/api/characters/fetchCharacterDataHook";
import { getCharacter } from "../../api/characters/getCharacter";
import { CharacterStateHook } from "../../hooks/store/characterStateHooks";
import { CharacterProfile } from "./views/CharacterProfile";
import { CharacterInventoryView } from "./views/CharacterInventory";
import Row from "react-bootstrap/Row";
import CharacterSubNav from "./components/CharacterSubNav";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";
import profile from "../../images/profile.jpeg";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHandSparkles } from "@fortawesome/free-solid-svg-icons";
import { faFlag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ListGroup from "react-bootstrap/ListGroup";
import CharacterEquipmentView from "./views/CharacterEquipmentView";

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
            <Card.Img variant="top" src={profile} />
            <ListGroup variant="flush">
              <ListGroup.Item>Level 1 Freelancer</ListGroup.Item>
              <ListGroup.Item>
                <FontAwesomeIcon icon={faHeart} />
                <span>Health</span>
                <ProgressBar variant="success" now={80} label={`${80} / 100`} />
              </ListGroup.Item>
              <ListGroup.Item>
                <FontAwesomeIcon icon={faHandSparkles} />
                Mana
                <ProgressBar variant="info" now={100} label={`${10} / 10`} />
              </ListGroup.Item>
              <ListGroup.Item>
                <FontAwesomeIcon icon={faFlag} />
                Experience
                <ProgressBar variant="warning" now={40} label={`${40} / 100`} />
              </ListGroup.Item>
            </ListGroup>
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
              <Route exact path={`${path}/equipment`}>
                <CharacterEquipmentView character={character} />
              </Route>
            </Switch>
          </Row>
        </Col>
      </Row>
    </ObjectDetailViewPageWrapper>
  );
}
