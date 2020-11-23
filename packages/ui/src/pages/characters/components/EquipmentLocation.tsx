import React from "react";
import { isNull, isUndefined } from "lodash";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CharacterInventory } from "@super-cascadia-rpg/api";
import CardImage from "./images/CardImage";

export default function EquipmentLocation({
  headerTitle,
  item,
  changeItem,
}: {
  headerTitle: string;
  buttonLabel?: string;
  item: CharacterInventory | null;
  changeItem?: (item: CharacterInventory, equipmentLocation: string) => void;
}) {
  if (isNull(item) || isUndefined(item)) {
    return (
      <Card style={{ marginBottom: "20px" }} bg="light" text="dark">
        <Card.Body>
          <Button variant="primary">Equip Item</Button>
        </Card.Body>
        <Card.Footer>{headerTitle}</Card.Footer>
      </Card>
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
            onClick={() => changeItem(item, headerTitle)}
          >
            Change Item
          </Button>
        )}
      </Card.Body>
      <Card.Footer>{headerTitle}</Card.Footer>
    </Card>
  );
}
