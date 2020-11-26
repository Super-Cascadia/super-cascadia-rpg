import React from "react";
import Card from "react-bootstrap/Card";
import { CharacterInventory } from "@super-cascadia-rpg/api";
import CardImage from "../images/CardImage";

interface Props {
  headerTitle: string;
  item: CharacterInventory | null;
}

export default function EquipmentCard({ headerTitle, item }: Props) {
  if (!item) {
    return null;
  }

  return (
    <Card style={{ marginBottom: "20px" }} bg="secondary" text="light">
      <CardImage image={item.item.icon} />
      <Card.Body>
        <Card.Title>{item.item.name}</Card.Title>
        <Card.Text>{item.item.description}</Card.Text>
      </Card.Body>
      <Card.Footer>{headerTitle}</Card.Footer>
    </Card>
  );
}
