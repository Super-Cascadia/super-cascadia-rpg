import {
  CharacterInventory,
  CharacterWithAttributes,
} from "@super-cascadia-rpg/api";
import Container from "react-bootstrap/Container";
import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import { toNumber, isUndefined, isNull } from "lodash";
import { CharacterEquipmentStateHook } from "../../../hooks/store/characterStateHooks";
import fetchCharacterEquipmentDataHook from "../../../hooks/api/characters/fetchCharacterEquipmentDataHook";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { CharacterEquipmentExpanded } from "@super-cascadia-rpg/api/build/src/handlers/characterEquipment/util";

interface Props {
  character: CharacterWithAttributes;
}

function EquipmentLocation({
  headerTitle,
  image,
  item,
}: {
  headerTitle?: string;
  buttonLabel?: string;
  image: string;
  item: CharacterInventory | null;
}) {
  const [imagePath, setImage] = useState("");

  if (isNull(item) || isUndefined(item)) {
    return (
      <Card style={{ marginBottom: "20px" }} bg="light" text="dark">
        <Card.Header>{headerTitle}</Card.Header>
        <Card.Img variant="top" src={imagePath} />
        <Card.Body>
          <Card.Text>No Item Equipped</Card.Text>
          <Button variant="primary">Equip Item</Button>
        </Card.Body>
      </Card>
    );
  }

  import(
    `../../../images/icons/items/rpg_icons/individual_32x32/${image}`
  ).then((module) => setImage(module.default));

  return (
    <Card style={{ marginBottom: "20px" }} bg="secondary" text="light">
      <Card.Header>{headerTitle}</Card.Header>
      <Card.Img style={{ width: "50px" }} variant="top" src={imagePath} />
      <Card.Body>
        <Card.Title>{item.item.name}</Card.Title>
        <Card.Text>{item.item.description}</Card.Text>
        <Button variant="primary">Change Item</Button>
      </Card.Body>
    </Card>
  );
}

export default function CharacterEquipmentView({ character }: Props) {
  const [equipment, setEquipment]: CharacterEquipmentStateHook = useState(
    {} as CharacterEquipmentExpanded
  );

  useEffect(
    fetchCharacterEquipmentDataHook(toNumber(character.id), setEquipment),
    // @ts-ignore
    {}
  );

  return (
    <Container fluid>
      <br />
      <Row>
        <Col>
          <EquipmentLocation
            headerTitle="Head"
            image="icon506.png"
            item={equipment.head}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <EquipmentLocation
            headerTitle="Left Hand"
            item={equipment.leftHand}
            image="icon506.png"
          />
        </Col>
        <Col>
          <EquipmentLocation
            headerTitle="Chest"
            image="icon506.png"
            item={equipment.chest}
          />
          <EquipmentLocation
            headerTitle="Arms"
            image="icon506.png"
            item={equipment.arms}
          />
        </Col>
        <Col>
          <EquipmentLocation
            headerTitle="Right Hand"
            item={equipment.rightHand}
            image="icon506.png"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <EquipmentLocation
            headerTitle="Legs"
            image="icon506.png"
            item={equipment.legs}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <EquipmentLocation
            headerTitle="Feet"
            image="icon506.png"
            item={equipment.feet}
          />
        </Col>
      </Row>
    </Container>
  );
}
