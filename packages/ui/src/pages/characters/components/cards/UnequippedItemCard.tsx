import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import React from "react";
import { EQUIPMENT_LOCATIONS } from "@super-cascadia-rpg/api";

interface NoEquippedItemParams {
  headerTitle: string;
  equipItem: (equipmentLocation: EQUIPMENT_LOCATIONS) => void;
  equipmentLocation: EQUIPMENT_LOCATIONS;
}

export default function UnequippedItemCard({
  headerTitle,
  equipItem,
  equipmentLocation,
}: NoEquippedItemParams) {
  return (
    <Card style={{ marginBottom: "20px" }} bg="light" text="dark">
      <Card.Body>
        <Button variant="primary" onClick={() => equipItem(equipmentLocation)}>
          Equip Item
        </Button>
      </Card.Body>
      <Card.Footer>{headerTitle}</Card.Footer>
    </Card>
  );
}
