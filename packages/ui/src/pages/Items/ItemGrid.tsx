import React, { useEffect, useState } from "react";
import { ItemModel } from "@super-cascadia-rpg/api/build/src/model/items/itemModel";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import fetchItemsDataHook from "../../hooks/api/items/fetchItemsDataHook";
import { Link } from "react-router-dom";
import { DeleteItemModal } from "../../components/modals/ItemModals";
import { ItemTable } from "../../components/tables/ItemTable";
import deleteItem from "../../api/items/deleteItem";

interface ItemGridDataState {
  items: ItemModel[];
}

type SelectedItemState = number | null;

export default function ItemGrid() {
  const [data, setData] = useState<ItemGridDataState>({
    items: [] as ItemModel[],
  });
  const [showDeleteItemModal, setDeleteItemModalVisibility] = useState<boolean>(
    false
  );
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

  return (
    <div>
      <Container>
        <br />
        <Card>
          <Card.Header>
            <h1>Items</h1>
            <Link to={`/items/create`}>
              <Button variant="primary" size="sm">
                Create Item
              </Button>
            </Link>
          </Card.Header>
          <Card.Body>
            <ItemTable items={data.items} handleShow={handleShowDeleteModal} />
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
    </div>
  );
}
