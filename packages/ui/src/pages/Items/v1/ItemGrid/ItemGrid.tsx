import React, { useEffect, useState } from "react";
import { ItemModel } from "@super-cascadia-rpg/api";
import fetchItemsDataHook from "../../../../hooks/api/items/fetchItemsDataHook";
import { useLocation, useHistory } from "react-router-dom";
import deleteItem from "../../../../api/items/deleteItem";
import duplicateItem from "../../../../api/items/duplicateItem";
import { find } from "lodash";
import ItemTabs from "./components/ItemTabs";
import GridPageWrapper from "../../../../components/pageWrapper/GridPageWrapper";
import ItemGridModals from "./components/modals/ItemGridModals";

export enum ITEM_GRID_TABS {
  ALL = "ALL",
  WEAPON = "WEAPON",
  FOOD = "FOOD",
  ARMOR = "ARMOR",
  ACCESSORY = "ACCESSORY",
  KEY_ITEM = "KEY_ITEM",
}

enum QUERY_PARAMS {
  TYPE = "type",
}

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function getInitialTabViewState(query: URLSearchParams): ITEM_GRID_TABS {
  const type = query.get(QUERY_PARAMS.TYPE);

  if (type) {
    const itemTabValues = Object.keys(ITEM_GRID_TABS);
    const isValidTab = find(itemTabValues, (tab) => tab === type);

    return isValidTab ? (isValidTab as ITEM_GRID_TABS) : ITEM_GRID_TABS.ALL;
  }

  return ITEM_GRID_TABS.ALL;
}

export default function ItemGrid() {
  const history = useHistory();
  const query = useQuery();
  const initialTabViewState = getInitialTabViewState(query);

  console.log(initialTabViewState);

  const [tabView, setTabViewState] = useState<ITEM_GRID_TABS>(
    initialTabViewState as ITEM_GRID_TABS
  );
  const [isLoading, setLoadingState] = useState<boolean>(true);
  const [itemData, setItemData] = useState<ItemModel[]>([] as ItemModel[]);
  const [showDeleteItemModal, setDeleteItemModalVisibility] = useState<boolean>(
    false
  );
  const [showDuplicateItemModal, setDuplicateItemModalVisibility] = useState<
    boolean
  >(false);
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
  const selectedItem = itemData?.find((item) => item.id === selectedItemId);
  const fetchItems = fetchItemsDataHook(tabView, setItemData, setLoadingState);

  // @ts-ignore
  useEffect(fetchItems, []);

  const handleCloseDeleteModal = (id?: number) => {
    if (id) {
      setLoadingState(true);
      deleteItem(id).then(fetchItems);
    }
    setDeleteItemModalVisibility(false);
  };
  const handleShowDeleteModal = (id: number) => {
    setSelectedItemId(id);
    setDeleteItemModalVisibility(true);
  };
  const handleShowDuplicateModal = (id: number) => {
    setSelectedItemId(id);
    setDuplicateItemModalVisibility(true);
  };
  const handleCloseDuplicateModal = (id?: number) => {
    if (id) {
      setLoadingState(true);
      duplicateItem(id).then(() =>
        fetchItemsDataHook(tabView, setItemData, setLoadingState)()
      );
    }
    setDuplicateItemModalVisibility(false);
  };
  const handleTabChange = (tabId: ITEM_GRID_TABS) => {
    history.push(`/items?type=${tabId}`);

    setLoadingState(true);
    setTabViewState(tabId);
    fetchItemsDataHook(tabId, setItemData, setLoadingState)();
  };

  return (
    <div>
      <GridPageWrapper
        title={"Items"}
        gridItemCount={itemData.length}
        createLink={`/items/create`}
      >
        <ItemTabs
          isLoading={isLoading}
          defaultActiveTab={initialTabViewState}
          handleTabChange={handleTabChange}
          itemData={itemData}
          handleShowDeleteModal={handleShowDeleteModal}
          handleShowDuplicateModal={handleShowDuplicateModal}
        />
      </GridPageWrapper>
      <ItemGridModals
        selectedItem={selectedItem}
        handleCloseDeleteModal={handleCloseDeleteModal}
        showDeleteItemModal={showDeleteItemModal}
        handleCloseDuplicateModal={handleCloseDuplicateModal}
        showDuplicateItemModal={showDuplicateItemModal}
      />
    </div>
  );
}
