import React, { useState } from "react";
import { isNull, isUndefined } from "lodash";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CharacterInventory } from "@super-cascadia-rpg/api";

export default function EquipmentLocation({
  headerTitle,
  image,
  item,
  changeItem,
}: {
  headerTitle: string;
  buttonLabel?: string;
  image: string;
  item: CharacterInventory | null;
  changeItem?: (item: CharacterInventory, equipmentLocation: string) => void;
}) {
  const [imagePath, setImage] = useState("");

  if (isNull(item) || isUndefined(item)) {
    return (
      <Card style={{ marginBottom: "20px" }} bg="light" text="dark">
        <Card.Img variant="top" src={imagePath} />
        <Card.Body>
          <Button variant="primary">Equip Item</Button>
        </Card.Body>
        <Card.Footer className="text-muted">{headerTitle}</Card.Footer>
      </Card>
    );
  }

  import(
    `../../../images/icons/items/rpg_icons/individual_32x32/${image}`
  ).then((module) => setImage(module.default));

  return (
    <Card style={{ marginBottom: "20px" }} bg="secondary" text="light">
      <Card.Img variant="top" src={imagePath} />
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
      <Card.Footer className="text-muted">{headerTitle}</Card.Footer>
    </Card>
  );
}
