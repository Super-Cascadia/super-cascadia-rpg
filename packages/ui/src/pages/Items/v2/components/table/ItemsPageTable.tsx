import { map, find, toNumber } from "lodash";
import Table from "react-bootstrap/Table";
import React from "react";
import { TableColumn, TableColumnRendered } from "../../ItemsPage";
import { ACTIONS_COLUMN } from "../../config/tableColumns.config";
import { ActionsCell } from "./cells/badgeCells";
import { BasicItem } from "@super-cascadia-rpg/api";
import { FIELDS } from "../../config/fields.config";

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
  item: TableColumnRendered[],
  id: number,
  handleShowEditModal: (id: number) => void,
  handleShowDeleteModal: (id: number) => void
) {
  return map(displayColumns, (column: TableColumn) => {
    if (column.fieldName === ACTIONS_COLUMN.fieldName) {
      return (
        <ActionsCell
          id={id}
          handleShowDeleteModal={handleShowDeleteModal}
          handleShowEditModal={handleShowEditModal}
        />
      );
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
  columns: TableColumn[],
  handleShowEditModal: (id: number) => void,
  handleShowDeleteModal: (id: number) => void
) {
  return map(itemsRendered, (item: TableColumnRendered[]) => {
    const displayColumns = [...columns, ACTIONS_COLUMN];
    const id = toNumber(find(item, (column) => column.key === FIELDS.ID));

    const row = getTableColumns(
      displayColumns,
      item,
      id,
      handleShowEditModal,
      handleShowDeleteModal
    );

    return <tr>{row}</tr>;
  });
}

interface Props {
  columns: TableColumn[];
  handleShowEditModal: (id: number) => void;
  handleShowDeleteModal: (id: number) => void;
  itemsRendered: TableColumnRendered[][];
}

export default function ItemsPageTable({
  columns,
  handleShowEditModal,
  handleShowDeleteModal,
  itemsRendered,
}: Props) {
  return (
    <Table striped bordered hover size="sm" variant="dark" responsive>
      <TableHeader columns={columns} />
      <tbody>
        {getTableRows(
          itemsRendered,
          columns,
          handleShowEditModal,
          handleShowDeleteModal
        )}
      </tbody>
    </Table>
  );
}
