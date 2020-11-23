import Card from "react-bootstrap/Card";
import React, { useState } from "react";

export default function CardImage({ image }: { image: string }) {
  const [imagePath, setImage] = useState("");

  if (!image) {
    return null;
  }

  import(
    `../../../../images/icons/items/rpg_icons/individual_32x32/${image}.png`
  ).then((module) => setImage(module.default));

  return <Card.Img variant="top" src={imagePath} />;
}
