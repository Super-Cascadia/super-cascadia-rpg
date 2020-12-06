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
import EquipmentLocation from "../components/EquipmentLocation";
import ChangeEquipmentModal from "../components/modal/ChangeEquipmentModal";
import { getCharacterEquipment } from "../../../api/characters/equipment/getCharacterEquipment";
import { removeCharacterEquipment } from "../../../api/characters/equipment/updateCharacterEquipment";
import AddEquipmentModal from "../components/modal/AddEquipmentModal";
import { CharacterEquipmentExpanded } from "@super-cascadia-rpg/api/build/src/handlers/characters/characterEquipment/util";

interface Props {
  character: CharacterWithAttributes;
}

export default function CharacterEquipmentView({ character }: Props) {
  const [equipment, setEquipment]: CharacterEquipmentStateHook = useState(
    {} as CharacterEquipmentExpanded
  );
  const [showChangeItemModal, setChangeItemModalViz] = useState<boolean>(false);
  const [showEquipItemModal, setEquipItemModalViz] = useState<boolean>(false);
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

  const handleShowEquipItemModal = (equipmentLocation: EQUIPMENT_LOCATIONS) => {
    setSelectedEquipmentLocation(equipmentLocation);
    setEquipItemModalViz(true);
  };

  const handleCloseEquipItemModal = (item?: CharacterInventory) => {
    setSelectedEquipmentLocation(null);
    setEquipItemModalViz(false);
    reloadData();
  };

  const handleUnequipItem = (equipmentLocation: EQUIPMENT_LOCATIONS) => {
    removeCharacterEquipment(characterIdNumber, equipmentLocation).then(
      reloadData
    );
  };

  return (
    <Container fluid>
      <br />
      <Row>
        <Col>
          <h2>Weapons</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <EquipmentLocation
            headerTitle="Left Hand"
            item={equipment.leftHand}
            equipmentLocation={EQUIPMENT_LOCATIONS.LEFT_HAND}
            changeItem={handleShowChangeItemModal}
            unequipItem={handleUnequipItem}
            equipItem={handleShowEquipItemModal}
          />
        </Col>

        <Col>
          <EquipmentLocation
            headerTitle="Right Hand"
            item={equipment.rightHand}
            equipmentLocation={EQUIPMENT_LOCATIONS.RIGHT_HAND}
            changeItem={handleShowChangeItemModal}
            unequipItem={handleUnequipItem}
            equipItem={handleShowEquipItemModal}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Armor</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <EquipmentLocation
            headerTitle="Head"
            item={equipment.head}
            equipmentLocation={EQUIPMENT_LOCATIONS.HEAD}
            changeItem={handleShowChangeItemModal}
            unequipItem={handleUnequipItem}
            equipItem={handleShowEquipItemModal}
          />
        </Col>
        <Col>
          <EquipmentLocation
            headerTitle="Chest"
            item={equipment.chest}
            equipmentLocation={EQUIPMENT_LOCATIONS.CHEST}
            changeItem={handleShowChangeItemModal}
            unequipItem={handleUnequipItem}
            equipItem={handleShowEquipItemModal}
          />
        </Col>
        <Col>
          <EquipmentLocation
            headerTitle="Arms"
            item={equipment.arms}
            equipmentLocation={EQUIPMENT_LOCATIONS.ARMS}
            changeItem={handleShowChangeItemModal}
            unequipItem={handleUnequipItem}
            equipItem={handleShowEquipItemModal}
          />
        </Col>
        <Col>
          <EquipmentLocation
            headerTitle="Legs"
            item={equipment.legs}
            equipmentLocation={EQUIPMENT_LOCATIONS.LEGS}
            changeItem={handleShowChangeItemModal}
            unequipItem={handleUnequipItem}
            equipItem={handleShowEquipItemModal}
          />
        </Col>
        <Col>
          <EquipmentLocation
            headerTitle="Feet"
            item={equipment.feet}
            equipmentLocation={EQUIPMENT_LOCATIONS.FEET}
            changeItem={handleShowChangeItemModal}
            unequipItem={handleUnequipItem}
            equipItem={handleShowEquipItemModal}
          />
        </Col>
      </Row>
      {showChangeItemModal &&
        selectedInventory &&
        selectedEquipmentLocation && (
          <ChangeEquipmentModal
            show={showChangeItemModal}
            selectedItem={selectedInventory}
            handleClose={handleCloseEquipmentChangeModal}
            equipmentLocation={selectedEquipmentLocation}
            characterId={character.id}
          />
        )}
      {showEquipItemModal && selectedEquipmentLocation && (
        <AddEquipmentModal
          show={showEquipItemModal}
          handleClose={handleCloseEquipItemModal}
          equipmentLocation={selectedEquipmentLocation}
          characterId={character.id}
        />
      )}
    </Container>
  );
}
