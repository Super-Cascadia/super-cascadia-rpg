import { Dictionary, map, mapKeys } from "lodash";
import { TableColumn, TableColumnRendered } from "../../ItemsPage";

export function getItemsWithRenderedValues<T>(
  item: Dictionary<T>,
  tableColumnKeys: Dictionary<TableColumn>
) {
  return map(
    item,
    (value, key: string): TableColumnRendered => {
      const tableColumnDefinition: TableColumn = tableColumnKeys[key];
      const renderedValue = tableColumnDefinition?.renderer
        ? tableColumnDefinition.renderer(value)
        : null;

      return {
        key,
        value,
        renderedValue,
      };
    }
  );
}

export function getItems<T>(
  items: T[],
  columns: TableColumn[]
): TableColumnRendered[][] {
  const tableColumnKeys = mapKeys(columns, (column) => column.fieldName);

  return map(items, (item: Dictionary<any>): TableColumnRendered[] => {
    return getItemsWithRenderedValues<T>(item, tableColumnKeys);
  });
}
