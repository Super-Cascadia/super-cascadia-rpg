import React from "react";
import { isNull, isUndefined } from "lodash";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {
  CharacterInventory,
  EQUIPMENT_LOCATIONS,
} from "@super-cascadia-rpg/api";
import CardImage from "./images/CardImage";

interface Props {
  headerTitle: string;
  buttonLabel?: string;
  item: CharacterInventory | null;
  equipmentLocation: EQUIPMENT_LOCATIONS;
  changeItem?: (
    item: CharacterInventory,
    equipmentLocation: EQUIPMENT_LOCATIONS
  ) => void;
  unequipItem?: (equipmentLocation: EQUIPMENT_LOCATIONS) => void;
}

interface NoEquipedItemParams {
  headerTitle: string;
}

function NoEquipedItem({ headerTitle }: NoEquipedItemParams) {
  return (
    <Card style={{ marginBottom: "20px" }} bg="light" text="dark">
      <Card.Body>
        <Button variant="primary">Equip Item</Button>
      </Card.Body>
      <Card.Footer>{headerTitle}</Card.Footer>
    </Card>
  );
}

export default function EquipmentLocation({
  headerTitle,
  item,
  changeItem,
  equipmentLocation,
  unequipItem,
}: Props) {
  if (isNull(item) || isUndefined(item)) {
    return <NoEquipedItem headerTitle={headerTitle} />;
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
