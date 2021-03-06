import Image from "react-bootstrap/Image";
import React, { useState } from "react";

export default function StandardIcon({ icon }: { icon: string }) {
  const [imagePath, setImage] = useState("");

  if (!icon) {
    return null;
  }

  import(
    `../../images/icons/items/rpg_icons/individual_32x32/${icon}.png`
  ).then((module) => setImage(module.default));

  return <Image src={imagePath} />;
}

export function StandardIconV2({ icon }: { icon: string }) {
  const [imagePath, setImage] = useState("");

  if (!icon) {
    return null;
  }

  import(`../../images/icons/items/${icon}`)
    .then((module) => setImage(module.default))
    .catch((e) => {
      console.error("could not load icon", e);
    });

  return <Image src={imagePath} />;
}
