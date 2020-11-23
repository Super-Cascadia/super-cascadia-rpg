import { CharacterWithAttributes } from "@super-cascadia-rpg/api";
import Container from "react-bootstrap/Container";
import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import { toNumber } from "lodash";
import { CharacterEquipmentStateHook } from "../../../hooks/store/characterStateHooks";
import fetchCharacterEquipmentDataHook from "../../../hooks/api/characters/fetchCharacterEquipmentDataHook";
import Col from "react-bootstrap/Col";
import { CharacterEquipmentExpanded } from "@super-cascadia-rpg/api/build/src/handlers/characterEquipment/util";
import EquipmentLocation from "../components/EquipmentLocation";

interface Props {
  character: CharacterWithAttributes;
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
