import { map } from "lodash";
import Table from "react-bootstrap/Table";
import React from "react";
import { BasicConsumableItem } from "@super-cascadia-rpg/api/src/db/entity/items/v2/consumables/BasicConsumableItem";
import { TableColumn } from "../../ItemsPage";
import TableRowColumn from "./cells/TableRowColumn";

const ACTIONS_COLUMN = {
  title: "Actions",
  fieldName: "actions",
};

function TableRow({
  item,
  columns,
}: {
  columns: TableColumn[];
  item: BasicConsumableItem;
  handleShowEditModal?: (item: BasicConsumableItem) => void;
}) {
  const displayColumns = [...columns, ACTIONS_COLUMN];

  return (
    <tr>
      {map(displayColumns, (column) => {
        return <TableRowColumn column={column} item={item} />;
      })}
    </tr>
  );
}

interface Props {
  items: BasicConsumableItem[];
  columns: TableColumn[];
  handleShowEditModal?: (iconAsset: BasicConsumableItem) => void;
}

function TableHeader({ columns }: { columns: TableColumn[] }) {
  const headerColumns: TableColumn[] = [...columns, ACTIONS_COLUMN];

  return (
    <thead>
      <tr>
        {map(headerColumns, (column) => {
          return <th>{column.title}</th>;
        })}
      </tr>
    </thead>
  );
}

export default function ItemsPageTable({
  items,
  columns,
  handleShowEditModal,
}: Props) {
  return (
    <Table striped bordered hover size="sm" variant="dark" responsive>
      <TableHeader columns={columns} />
      <tbody>
        {map(items, (item: BasicConsumableItem) => (
          <TableRow
            columns={columns}
            item={item}
            handleShowEditModal={handleShowEditModal}
          />
        ))}
      </tbody>
    </Table>
  );
}
