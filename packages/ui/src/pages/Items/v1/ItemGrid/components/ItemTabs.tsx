import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import React from "react";
import { ITEM_GRID_TABS } from "../ItemGrid";
import { ItemModel } from "@super-cascadia-rpg/api";
import { ItemTable } from "./ItemTable";

interface Props {
  isLoading: boolean;
  defaultActiveTab: ITEM_GRID_TABS;
  handleTabChange: (tabId: ITEM_GRID_TABS) => void;
  itemData: ItemModel[];
  handleShowDeleteModal: (itemId: number) => void;
  handleShowDuplicateModal: (itemId: number) => void;
}

function getItemTable(
  isLoading: boolean,
  itemData: ItemModel[],
  handleShowDeleteModal: (itemId: number) => void,
  handleShowDuplicateModal: (itemId: number) => void
) {
  return (
    <>
      <br />
      <ItemTable
        isLoading={isLoading}
        items={itemData}
        handleShow={handleShowDeleteModal}
        handleDuplicate={handleShowDuplicateModal}
      />
    </>
  );
}

function ItemTabs({
  isLoading,
  defaultActiveTab,
  handleTabChange,
  itemData,
  handleShowDeleteModal,
  handleShowDuplicateModal,
}: Props) {
  return (
    <Tabs
      defaultActiveKey={defaultActiveTab}
      id="uncontrolled-tab-example"
      onSelect={(k: string) => handleTabChange(k as ITEM_GRID_TABS)}
    >
      <Tab eventKey={ITEM_GRID_TABS.ALL} title="All">
        {getItemTable(
          isLoading,
          itemData,
          handleShowDeleteModal,
          handleShowDuplicateModal
        )}
      </Tab>
      <Tab eventKey={ITEM_GRID_TABS.FOOD} title="Food">
        {getItemTable(
          isLoading,
          itemData,
          handleShowDeleteModal,
          handleShowDuplicateModal
        )}
      </Tab>
      <Tab eventKey={ITEM_GRID_TABS.KEY_ITEM} title="Key ItemsPage">
        {getItemTable(
          isLoading,
          itemData,
          handleShowDeleteModal,
          handleShowDuplicateModal
        )}
      </Tab>
      <Tab eventKey={ITEM_GRID_TABS.ARMOR} title="Armor">
        {getItemTable(
          isLoading,
          itemData,
          handleShowDeleteModal,
          handleShowDuplicateModal
        )}
      </Tab>
      <Tab eventKey={ITEM_GRID_TABS.WEAPON} title="Weapon">
        {getItemTable(
          isLoading,
          itemData,
          handleShowDeleteModal,
          handleShowDuplicateModal
        )}
      </Tab>
      <Tab eventKey={ITEM_GRID_TABS.ACCESSORY} title="Accessory">
        {getItemTable(
          isLoading,
          itemData,
          handleShowDeleteModal,
          handleShowDuplicateModal
        )}
      </Tab>
    </Tabs>
  );
}

export default ItemTabs;
