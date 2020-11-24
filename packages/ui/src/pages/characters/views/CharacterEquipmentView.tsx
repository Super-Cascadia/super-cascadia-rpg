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
import { getCharacter } from "../../../api/characters/getCharacter";
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
  const [equipmentLocation, setEquipmentLocation] = useState<string>("");
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
    equipmentLocation: string
  ) => {
    setEquipmentLocation(equipmentLocation);
    setSelectedInventory(item);
    setChangeItemModalViz(true);
  };

  const handleCloseEquipmentChangeModal = (item?: CharacterInventory) => {
    setEquipmentLocation("");
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
            changeItem={handleShowChangeItemModal}
          />
        </Col>
      </Row>
      <Row>
        <Col lg={2}>
          <EquipmentLocation
            headerTitle="Left Hand"
            item={equipment.leftHand}
            changeItem={handleShowChangeItemModal}
          />
        </Col>
        <Col lg={2}>
          <EquipmentLocation
            headerTitle="Chest"
            item={equipment.chest}
            changeItem={handleShowChangeItemModal}
          />
          <EquipmentLocation
            headerTitle="Arms"
            item={equipment.arms}
            changeItem={handleShowChangeItemModal}
          />
        </Col>
        <Col lg={2}>
          <EquipmentLocation
            headerTitle="Right Hand"
            item={equipment.rightHand}
            changeItem={handleShowChangeItemModal}
          />
        </Col>
      </Row>
      <Row>
        <Col lg={2}>
          <EquipmentLocation
            headerTitle="Legs"
            item={equipment.legs}
            changeItem={handleShowChangeItemModal}
          />
        </Col>
      </Row>
      <Row>
        <Col lg={2}>
          <EquipmentLocation
            headerTitle="Feet"
            item={equipment.feet}
            changeItem={handleShowChangeItemModal}
          />
        </Col>
      </Row>
      {showChangeItemModal && selectedInventory && (
        <ChangeEquipmentModal
          show={showChangeItemModal}
          selectedItem={selectedInventory}
          handleClose={handleCloseEquipmentChangeModal}
          equipmentLocation={equipmentLocation}
          characterId={character.id}
        />
      )}
    </Container>
  );
}
