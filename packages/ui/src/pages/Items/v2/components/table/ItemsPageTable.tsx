import { map } from "lodash";
import Table from "react-bootstrap/Table";
import React from "react";
import Badge from "react-bootstrap/Badge";
import { BasicConsumableItem } from "@super-cascadia-rpg/api";

function AssetTableRow({
  item,
}: {
  item: BasicConsumableItem;
  handleShowEditModal?: (item: BasicConsumableItem) => void;
}) {
  return (
    <tr>
      <td>
        <Badge variant="primary">{item.id}</Badge>
      </td>
      <td>{/*<StandardIconV2 icon={undefined} />*/}</td>
      <td>{item.name}</td>
      <td>{item.description}</td>
      <td>Actions</td>
    </tr>
  );
}

interface Props {
  items: BasicConsumableItem[];
  handleShowEditModal?: (iconAsset: BasicConsumableItem) => void;
}

export default function ItemsPageTable({ items, handleShowEditModal }: Props) {
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>ID</th>
          <th>Icon</th>
          <th>Name</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {map(items, (item: BasicConsumableItem) => (
          <AssetTableRow
            item={item}
            handleShowEditModal={handleShowEditModal}
          />
        ))}
      </tbody>
    </Table>
  );
}
