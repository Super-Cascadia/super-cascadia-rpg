import Tab from "react-bootstrap/Tab";
import { ItemTable } from "../../../../components/tables/ItemTable";
import Tabs from "react-bootstrap/Tabs";
import React from "react";
import { ITEM_GRID_TABS } from "../ItemGrid";
import { ItemModel } from "@super-cascadia-rpg/api";

interface Props {
  handleTabChange: (tabId: ITEM_GRID_TABS) => void;
  itemData: ItemModel[];
  handleShowDeleteModal: (itemId: number) => void;
  handleShowDuplicateModal: (itemId: number) => void;
}

function ItemTabs({
  handleTabChange,
  itemData,
  handleShowDeleteModal,
  handleShowDuplicateModal,
}: Props) {
  return (
    <Tabs
      defaultActiveKey={ITEM_GRID_TABS.ALL}
      id="uncontrolled-tab-example"
      onSelect={(k: string) => handleTabChange(k as ITEM_GRID_TABS)}
    >
      <Tab eventKey={ITEM_GRID_TABS.ALL} title="All">
        <br />
        <ItemTable
          items={itemData}
          handleShow={handleShowDeleteModal}
          handleDuplicate={handleShowDuplicateModal}
        />
      </Tab>
      <Tab eventKey={ITEM_GRID_TABS.FOOD} title="Food">
        <br />
        <ItemTable
          items={itemData}
          handleShow={handleShowDeleteModal}
          handleDuplicate={handleShowDuplicateModal}
        />
      </Tab>
      <Tab eventKey={ITEM_GRID_TABS.KEY_ITEM} title="Key Items">
        <br />
        <ItemTable
          items={itemData}
          handleShow={handleShowDeleteModal}
          handleDuplicate={handleShowDuplicateModal}
        />
      </Tab>
      <Tab eventKey={ITEM_GRID_TABS.ARMOR} title="Armor">
        <br />
        <ItemTable
          items={itemData}
          handleShow={handleShowDeleteModal}
          handleDuplicate={handleShowDuplicateModal}
        />
      </Tab>
    </Tabs>
  );
}

export default ItemTabs;
