import {
  CharacterInventory,
  CharacterWithAttributes,
  EQUIPMENT_LOCATIONS,
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
import { getCharacterEquipment } from "../../../api/characters/equipment/getCharacterEquipment";

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
  const [
    selectedEquipmentLocation,
    setSelectedEquipmentLocation,
  ] = useState<EQUIPMENT_LOCATIONS | null>(null);
  const characterIdNumber = toNumber(character.id);

  useEffect(
    fetchCharacterEquipmentDataHook(characterIdNumber, setEquipment),
    // @ts-ignore
    {}
  );

  const reloadData = () => {
    getCharacterEquipment(characterIdNumber).then(setEquipment);
  };

  const handleShowChangeItemModal = (
    item: CharacterInventory,
    equipmentLocation: EQUIPMENT_LOCATIONS
  ) => {
    setSelectedEquipmentLocation(equipmentLocation);
    setSelectedInventory(item);
    setChangeItemModalViz(true);
  };

  const handleCloseEquipmentChangeModal = (item?: CharacterInventory) => {
    setSelectedEquipmentLocation(null);
    setSelectedInventory(null);
    setChangeItemModalViz(false);
    reloadData();
  };

  return (
    <Container fluid>
      <br />
      <Row>
        <Col lg={2}>
          <EquipmentLocation
            headerTitle="Head"
            item={equipment.head}
            equipmentLocation={EQUIPMENT_LOCATIONS.HEAD}
            changeItem={handleShowChangeItemModal}
          />
        </Col>
      </Row>
      <Row>
        <Col lg={2}>
          <EquipmentLocation
            headerTitle="Left Hand"
            item={equipment.leftHand}
            equipmentLocation={EQUIPMENT_LOCATIONS.LEFT_HAND}
            changeItem={handleShowChangeItemModal}
          />
        </Col>
        <Col lg={2}>
          <EquipmentLocation
            headerTitle="Chest"
            item={equipment.chest}
            equipmentLocation={EQUIPMENT_LOCATIONS.CHEST}
            changeItem={handleShowChangeItemModal}
          />
          <EquipmentLocation
            headerTitle="Arms"
            item={equipment.arms}
            equipmentLocation={EQUIPMENT_LOCATIONS.ARMS}
            changeItem={handleShowChangeItemModal}
          />
        </Col>
        <Col lg={2}>
          <EquipmentLocation
            headerTitle="Right Hand"
            item={equipment.rightHand}
            equipmentLocation={EQUIPMENT_LOCATIONS.RIGHT_HAND}
            changeItem={handleShowChangeItemModal}
          />
        </Col>
      </Row>
      <Row>
        <Col lg={2}>
          <EquipmentLocation
            headerTitle="Legs"
            item={equipment.legs}
            equipmentLocation={EQUIPMENT_LOCATIONS.LEGS}
            changeItem={handleShowChangeItemModal}
          />
        </Col>
      </Row>
      <Row>
        <Col lg={2}>
          <EquipmentLocation
            headerTitle="Feet"
            item={equipment.feet}
            equipmentLocation={EQUIPMENT_LOCATIONS.FEET}
            changeItem={handleShowChangeItemModal}
          />
        </Col>
      </Row>
      {showChangeItemModal &&
        selectedInventory &&
        selectedEquipmentLocation && (
          <ChangeEquipmentModal
            equipment={equipment}
            show={showChangeItemModal}
            selectedItem={selectedInventory}
            handleClose={handleCloseEquipmentChangeModal}
            equipmentLocation={selectedEquipmentLocation}
            characterId={character.id}
          />
        )}
    </Container>
  );
}
