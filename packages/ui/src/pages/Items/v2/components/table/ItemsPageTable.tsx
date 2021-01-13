import { map, find } from "lodash";
import Table from "react-bootstrap/Table";
import React from "react";
import { BasicConsumableItem } from "@super-cascadia-rpg/api/src/db/entity/items/v2/consumables/BasicConsumableItem";
import { TableColumn, TableColumnRendered } from "../../ItemsPage";

const ACTIONS_COLUMN = {
  title: "Actions",
  fieldName: "actions",
};

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

function getTableColumns(
  displayColumns: (TableColumn | { fieldName: string; title: string })[],
  item: TableColumnRendered[]
) {
  return map(displayColumns, (column: TableColumn) => {
    if (column.fieldName === ACTIONS_COLUMN.fieldName) {
      return <td>Actions go here</td>;
    } else {
      const itemToRender = find(item, (itemField) => {
        return itemField.key === column.fieldName;
      });

      return <td>{itemToRender?.renderedValue}</td>;
    }
  });
}

function getTableRows(
  itemsRendered: TableColumnRendered[][] | undefined,
  columns: TableColumn[]
) {
  return map(itemsRendered, (item: TableColumnRendered[]) => {
    const displayColumns = [...columns, ACTIONS_COLUMN];
    const row = getTableColumns(displayColumns, item);

    return <tr>{row}</tr>;
  });
}

interface Props {
  columns: TableColumn[];
  handleShowEditModal?: (iconAsset: BasicConsumableItem) => void;
  itemsRendered?: TableColumnRendered[][];
}

export default function ItemsPageTable({
  columns,
  handleShowEditModal,
  itemsRendered,
}: Props) {
  return (
    <Table striped bordered hover size="sm" variant="dark" responsive>
      <TableHeader columns={columns} />
      <tbody>{getTableRows(itemsRendered, columns)}</tbody>
    </Table>
  );
}
