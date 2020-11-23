import {
  CharacterInventory,
  CharacterWithAttributes,
} from "@super-cascadia-rpg/api";
import Container from "react-bootstrap/Container";
import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import { toNumber } from "lodash";
import { CharacterEquipmentStateHook } from "../../../hooks/store/characterStateHooks";
import fetchCharacterEquipmentDataHook from "../../../hooks/api/characters/fetchCharacterEquipmentDataHook";
import Col from "react-bootstrap/Col";
import { CharacterEquipmentExpanded } from "@super-cascadia-rpg/api/build/src/handlers/characterEquipment/util";
import EquipmentLocation from "../components/EquipmentLocation";
import ChangeEquipmentModal from "../components/modal/ChangeEquipmentModal";

interface Props {
  character: CharacterWithAttributes;
}

export default function CharacterEquipmentView({ character }: Props) {
  const [equipment, setEquipment]: CharacterEquipmentStateHook = useState(
    {} as CharacterEquipmentExpanded
  );
  const [showChangeItemModal, setChangeItemModalViz] = useState<boolean>(false);
  const [
    selectedInventory,
    setSelectedInventory,
  ] = useState<CharacterInventory | null>(null);
  const [equipmentLocation, setEquipmentLocation] = useState<string>("");

  useEffect(
    fetchCharacterEquipmentDataHook(toNumber(character.id), setEquipment),
    // @ts-ignore
    {}
  );

  const handleShowChangeItemModal = (
    item: CharacterInventory,
    equipmentLocation: string
  ) => {
    setEquipmentLocation(equipmentLocation);
    setSelectedInventory(item);
    setChangeItemModalViz(true);
  };

  const handleChangeEquipment = (item?: CharacterInventory) => {
    setEquipmentLocation("");
    setSelectedInventory(null);
    setChangeItemModalViz(false);
  };

  return (
    <Container fluid>
      <br />
      <Row>
        <Col>
          <EquipmentLocation
            headerTitle="Head"
            image="icon506.png"
            item={equipment.head}
            changeItem={handleShowChangeItemModal}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <EquipmentLocation
            headerTitle="Left Hand"
            item={equipment.leftHand}
            image="icon506.png"
            changeItem={handleShowChangeItemModal}
          />
        </Col>
        <Col>
          <EquipmentLocation
            headerTitle="Chest"
            image="icon506.png"
            item={equipment.chest}
            changeItem={handleShowChangeItemModal}
          />
          <EquipmentLocation
            headerTitle="Arms"
            image="icon506.png"
            item={equipment.arms}
            changeItem={handleShowChangeItemModal}
          />
        </Col>
        <Col>
          <EquipmentLocation
            headerTitle="Right Hand"
            item={equipment.rightHand}
            image="icon506.png"
            changeItem={handleShowChangeItemModal}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <EquipmentLocation
            headerTitle="Legs"
            image="icon506.png"
            item={equipment.legs}
            changeItem={handleShowChangeItemModal}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <EquipmentLocation
            headerTitle="Feet"
            image="icon506.png"
            item={equipment.feet}
            changeItem={handleShowChangeItemModal}
          />
        </Col>
      </Row>
      {showChangeItemModal && selectedInventory && (
        <ChangeEquipmentModal
          show={showChangeItemModal}
          selectedItem={selectedInventory}
          handleClose={handleChangeEquipment}
          equipmentLocation={equipmentLocation}
        />
      )}
    </Container>
  );
}
