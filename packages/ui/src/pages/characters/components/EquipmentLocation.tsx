import React from "react";
import { isNull, isUndefined } from "lodash";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {
  CharacterInventory,
  EQUIPMENT_LOCATIONS,
} from "@super-cascadia-rpg/api";
import CardImage from "./images/CardImage";
import UnequippedItemCard from "./cards/UnequippedItemCard";

interface Props {
  headerTitle: string;
  buttonLabel?: string;
  item: CharacterInventory | null;
  equipmentLocation: EQUIPMENT_LOCATIONS;
  changeItem: (
    item: CharacterInventory,
    equipmentLocation: EQUIPMENT_LOCATIONS
  ) => void;
  unequipItem: (equipmentLocation: EQUIPMENT_LOCATIONS) => void;
  equipItem: (equipmentLocation: EQUIPMENT_LOCATIONS) => void;
}

export default function EquipmentLocation({
  headerTitle,
  item,
  changeItem,
  equipmentLocation,
  unequipItem,
  equipItem,
}: Props) {
  if (isNull(item) || isUndefined(item)) {
    return (
      <UnequippedItemCard
        headerTitle={headerTitle}
        equipItem={equipItem}
        equipmentLocation={equipmentLocation}
      />
    );
  }

  return (
    <Card style={{ marginBottom: "20px" }} bg="secondary" text="light">
      <CardImage image={item.item.icon} />
      <Card.Body>
        <Card.Title>{item.item.name}</Card.Title>
        <Card.Text>{item.item.description}</Card.Text>
        {changeItem && (
          <Button
            variant="primary"
            onClick={() => changeItem(item, equipmentLocation)}
          >
            Change Item
          </Button>
        )}
        {unequipItem && (
          <Button
            variant="danger"
            onClick={() => unequipItem(equipmentLocation)}
          >
            Unequip
          </Button>
        )}
      </Card.Body>
      <Card.Footer>{headerTitle}</Card.Footer>
    </Card>
  );
}
