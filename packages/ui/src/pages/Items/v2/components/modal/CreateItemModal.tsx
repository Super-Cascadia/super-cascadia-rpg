import React from "react";
import { useLocation } from "react-router-dom";
import { last } from "lodash";
import CreateConsumableItemModal from "./CreateConsumableItemModal";
import CreateArmorItemModal from "./CreateArmorItemModal";

interface Props {
  show: boolean;
  handleClose: () => void;
}

enum ITEM_TYPE {
  CONSUMABLES = "consumables",
  ARMORS = "armors",
  WEAPONS = "weapons",
}

export default function CreateItemModal({ show, handleClose }: Props) {
  let { pathname } = useLocation();
  const itemType = last(pathname.split("/"));
  console.log("useLocation", pathname, itemType);

  switch (itemType) {
    case ITEM_TYPE.CONSUMABLES:
      return (
        <CreateConsumableItemModal show={show} handleClose={handleClose} />
      );
    case ITEM_TYPE.ARMORS:
      return <CreateArmorItemModal show={show} handleClose={handleClose} />;
    case ITEM_TYPE.WEAPONS:
      return (
        <CreateConsumableItemModal show={show} handleClose={handleClose} />
      );
    default:
      return <div>Select Item type</div>;
  }
}
