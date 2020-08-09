import React, { useEffect, useState } from "react";
import { ItemModel } from "@super-cascadia-rpg/api/build/src/model/items/itemModel";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import fetchItemsDataHook from "../../hooks/api/items/fetchItemsDataHook";
import { Link } from "react-router-dom";
import { ItemModal } from "../../components/modals/ItemModals";
import { ItemTable } from "../../components/tables/ItemTable";

interface ItemGridDataState {
  items: ItemModel[];
}

export default function ItemGrid() {
  const [data, setData] = useState<ItemGridDataState>({
    items: [] as ItemModel[],
  });
  const [show, setShow] = useState(false);
  const [selectedItemId, setSelectedItem] = useState<number | undefined>(
    undefined
  );
  const selectedItem = data?.items.find((item) => item.id === selectedItemId);

  // @ts-ignore
  useEffect(fetchItemsDataHook(setData), []);

  const handleClose = () => setShow(false);
  const handleShow = (id: number) => {
    setSelectedItem(id);
    setShow(true);
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
            <ItemTable items={data.items} handleShow={handleShow} />
          </Card.Body>
          <Card.Footer className="text-muted">
            {data.items.length} items
          </Card.Footer>
        </Card>
      </Container>
      {selectedItem ? (
        <ItemModal
          handleClose={handleClose}
          handleShow={handleShow}
          selectedItem={selectedItem}
          show={show}
        />
      ) : null}
    </div>
  );
}
