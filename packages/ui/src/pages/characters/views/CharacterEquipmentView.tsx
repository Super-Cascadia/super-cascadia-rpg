import { CharacterWithAttributes } from "@super-cascadia-rpg/api";
import Container from "react-bootstrap/Container";
import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import { toNumber } from "lodash";
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
  name,
  description,
  buttonLabel,
  image,
}: {
  headerTitle?: string;
  name?: string;
  description?: string;
  buttonLabel?: string;
  image: string;
}) {
  const [imagePath, setImage] = useState("");

  import(
    `../../../images/icons/items/rpg_icons/individual_32x32/${image}`
  ).then((module) => setImage(module.default));

  return (
    <Card style={{ marginBottom: "20px" }}>
      <Card.Header>{headerTitle}</Card.Header>
      <Card.Img variant="top" src={imagePath} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">{buttonLabel}</Button>
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
          {equipment.leftHand && (
            <EquipmentLocation
              headerTitle="Left Hand"
              name={equipment.leftHand.item.name}
              description={equipment.leftHand.item.description}
              buttonLabel="Change Item"
              image="icon506.png"
            />
          )}
        </Col>
        <Col>
          <EquipmentLocation
            headerTitle="Right Hand"
            description={undefined}
            buttonLabel={undefined}
            image="icon506.png"
          />
        </Col>
        <Col>
          <EquipmentLocation
            headerTitle="Head"
            description={undefined}
            buttonLabel={undefined}
            image="icon506.png"
          />
        </Col>
        <Col>
          <EquipmentLocation
            headerTitle="Chest"
            description={undefined}
            buttonLabel={undefined}
            image="icon506.png"
          />
        </Col>
        <Col>
          <EquipmentLocation
            headerTitle="Arms"
            description={undefined}
            buttonLabel={undefined}
            image="icon506.png"
          />
        </Col>
        <Col>
          <EquipmentLocation
            headerTitle="Legs"
            description={undefined}
            buttonLabel={undefined}
            image="icon506.png"
          />
        </Col>
        <Col>
          <EquipmentLocation
            headerTitle="Feet"
            description={undefined}
            buttonLabel={undefined}
            image="icon506.png"
          />
        </Col>
      </Row>
    </Container>
  );
}
