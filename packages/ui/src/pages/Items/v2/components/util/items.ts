import { Dictionary, map, mapKeys } from "lodash";
import { TableColumn, TableColumnRendered } from "../../ItemsPage";

export function getRenderedFieldValues<T>(
  item: Dictionary<T>,
  tableColumnKeys: Dictionary<TableColumn>
) {
  const mappedValues = map(
    item,
    (value, key: string): TableColumnRendered => {
      const tableColumnDefinition = tableColumnKeys[key];
      const renderedValue = tableColumnDefinition?.renderer
        ? tableColumnDefinition.renderer(value)
        : null;

      return {
        key,
        renderedValue,
      };
    }
  );

  return mappedValues;
}

export function getItems<T>(
  items: T[],
  columns: TableColumn[]
): TableColumnRendered[][] {
  const tableColumnKeys = mapKeys(columns, (column) => column.fieldName);

  return map(items, (item: Dictionary<any>): TableColumnRendered[] => {
    return getRenderedFieldValues<T>(item, tableColumnKeys);
  });
}
