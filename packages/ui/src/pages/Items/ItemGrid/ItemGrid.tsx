import React, { useEffect, useState } from "react";
import { ItemModel } from "@super-cascadia-rpg/api/build/src/model/items/itemModel";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import fetchItemsDataHook from "../../../hooks/api/items/fetchItemsDataHook";
import { Link } from "react-router-dom";
import {
  DeleteItemModal,
  DuplicateItemModal,
} from "../../../components/modals/ItemModals";
import { ItemTable } from "../../../components/tables/ItemTable";
import deleteItem from "../../../api/items/deleteItem";
import duplicateItem from "../../../api/items/duplicateItem";
import { isEmpty } from "lodash";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Loading from "../../../components/Loading";

export enum ITEM_GRID_TABS {
  ALL = "ALL",
  WEAPON = "WEAPON",
  FOOD = "FOOD",
  ARMOR = "ARMOR",
  ACCESSORY = "ACCESSORY",
  KEY_ITEM = "KEY_ITEM",
}

export default function ItemGrid() {
  const [tabView, setTabViewState] = useState<ITEM_GRID_TABS>(
    ITEM_GRID_TABS.ALL
  );
  const [itemData, setItemData] = useState<ItemModel[]>([] as ItemModel[]);
  const [showDeleteItemModal, setDeleteItemModalVisibility] = useState<boolean>(
    false
  );
  const [showDuplicateItemModal, setDuplicateItemModalVisibility] = useState<
    boolean
  >(false);
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
  const selectedItem = itemData?.find((item) => item.id === selectedItemId);
  const fetchItems = fetchItemsDataHook(tabView, setItemData);

  // @ts-ignore
  useEffect(fetchItems, []);

  const handleCloseDeleteModal = (id?: number) => {
    if (id) {
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
      duplicateItem(id).then(() => fetchItemsDataHook(tabView, setItemData)());
    }
    setDuplicateItemModalVisibility(false);
  };
  const handleTabChange = (tabId: ITEM_GRID_TABS) => {
    setTabViewState(tabId);
    fetchItemsDataHook(tabId, setItemData)();
  };

  if (isEmpty(itemData)) {
    return <Loading title="Item View" />;
  }

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
          </Card.Body>
          <Card.Footer className="text-muted">
            {itemData.length} items
          </Card.Footer>
        </Card>
      </Container>
      {selectedItem ? (
        <DeleteItemModal
          handleClose={handleCloseDeleteModal}
          selectedItem={selectedItem}
          show={showDeleteItemModal}
        />
      ) : null}
      {selectedItem ? (
        <DuplicateItemModal
          handleClose={handleCloseDuplicateModal}
          selectedItem={selectedItem}
          show={showDuplicateItemModal}
        />
      ) : null}
    </div>
  );
}
