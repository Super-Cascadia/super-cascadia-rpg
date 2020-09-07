import React, { useEffect, useState } from "react";
import { ItemModel } from "@super-cascadia-rpg/api/build/src/model/items/itemModel";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import fetchItemsDataHook from "../../hooks/api/items/fetchItemsDataHook";
import { Link } from "react-router-dom";
import {
  DeleteItemModal,
  DuplicateItemModal,
} from "../../components/modals/ItemModals";
import { ItemTable } from "../../components/tables/ItemTable";
import deleteItem from "../../api/items/deleteItem";
import duplicateItem from "../../api/items/duplicateItem";
import { isEmpty } from "lodash";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Loading from "../../components/Loading";

interface ItemGridDataState {
  items: ItemModel[];
  tabView: ITEM_GRID_TABS;
}

type SelectedItemState = number | null;

enum ITEM_GRID_TABS {
  ALL = "ALL",
  FOOD = "FOOD",
  ARMOR = "ARMOR",
  KEY_ITEM = "KEY_ITEM",
}

export default function ItemGrid() {
  const [data, setData] = useState<ItemGridDataState>({
    items: [] as ItemModel[],
    tabView: ITEM_GRID_TABS.ALL,
  });
  const [showDeleteItemModal, setDeleteItemModalVisibility] = useState<boolean>(
    false
  );
  const [showDuplicateItemModal, setDuplicateItemModalVisibility] = useState<
    boolean
  >(false);
  const [selectedItemId, setSelectedItem] = useState<SelectedItemState>(null);
  const selectedItem = data?.items.find((item) => item.id === selectedItemId);
  const fetchItems = fetchItemsDataHook(setData);

  // @ts-ignore
  useEffect(fetchItems, []);

  const handleCloseDeleteModal = (id?: number) => {
    if (id) {
      console.log("delete the item!", id);
      deleteItem(id).then(fetchItems);
    }
    setDeleteItemModalVisibility(false);
  };
  const handleShowDeleteModal = (id: number) => {
    setSelectedItem(id);
    setDeleteItemModalVisibility(true);
  };
  const handleShowDuplicateModal = (id: number) => {
    setSelectedItem(id);
    setDuplicateItemModalVisibility(true);
  };
  const handleCloseDuplicateModal = (id?: number) => {
    if (id) {
      console.log("duplicate the item!", id);
      duplicateItem(id).then(fetchItems);
    }
    setDuplicateItemModalVisibility(false);
  };

  const handleTabChange = (tabId: ITEM_GRID_TABS) => {
    setData({
      ...data,
      tabView: tabId,
    });
  };

  if (isEmpty(data.items)) {
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
              defaultActiveKey="all"
              id="uncontrolled-tab-example"
              onSelect={(k: string) => handleTabChange(k as ITEM_GRID_TABS)}
            >
              <Tab eventKey={ITEM_GRID_TABS.ALL} title="All">
                <br />
                <ItemTable
                  items={data.items}
                  handleShow={handleShowDeleteModal}
                  handleDuplicate={handleShowDuplicateModal}
                />
              </Tab>
              <Tab eventKey="food" title="Food">
                <br />
                <ItemTable
                  items={data.items}
                  handleShow={handleShowDeleteModal}
                  handleDuplicate={handleShowDuplicateModal}
                />
              </Tab>
              <Tab eventKey="key_items" title="Key Items">
                <br />
                <ItemTable
                  items={data.items}
                  handleShow={handleShowDeleteModal}
                  handleDuplicate={handleShowDuplicateModal}
                />
              </Tab>
            </Tabs>
          </Card.Body>
          <Card.Footer className="text-muted">
            {data.items.length} items
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
