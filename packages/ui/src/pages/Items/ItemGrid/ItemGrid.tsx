import React, { useEffect, useState } from "react";
import { ItemModel } from "@super-cascadia-rpg/api/build/src/model/items/itemModel";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import fetchItemsDataHook from "../../../hooks/api/items/fetchItemsDataHook";
import { Link, useLocation, useHistory } from "react-router-dom";
import deleteItem from "../../../api/items/deleteItem";
import duplicateItem from "../../../api/items/duplicateItem";
import { find } from "lodash";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ItemTabs from "./components/ItemTabs";
import ItemGridModals from "./components/ItemGridModals";

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
      <Container>
        <br />
        <Card>
          <Card.Header>
            <Container>
              <Row>
                <Col sm="10">
                  <h1>Items</h1>
                </Col>
                <Col sm="2">
                  <Link to={`/items/create`}>
                    <Button variant="primary" size="sm">
                      Create Item
                    </Button>
                  </Link>
                </Col>
              </Row>
            </Container>
          </Card.Header>
          <Card.Body>
            <ItemTabs
              isLoading={isLoading}
              defaultActiveTab={initialTabViewState}
              handleTabChange={handleTabChange}
              itemData={itemData}
              handleShowDeleteModal={handleShowDeleteModal}
              handleShowDuplicateModal={handleShowDuplicateModal}
            />
          </Card.Body>
          <Card.Footer className="text-muted">
            {itemData.length} items
          </Card.Footer>
        </Card>
      </Container>
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
