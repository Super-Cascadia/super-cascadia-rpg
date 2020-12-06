import { map } from "lodash";
import Table from "react-bootstrap/Table";
import React from "react";
import Badge from "react-bootstrap/Badge";
import { IconAsset } from "@super-cascadia-rpg/api/build/src/db/entity/assets/icons/IconAsset";

function AssetTableRow({ assetItem }: { assetItem: IconAsset }) {
  return (
    <tr>
      <td>
        <Badge variant="primary">{assetItem.id}</Badge>
      </td>
      <td>{assetItem.name}</td>
      <td>{assetItem.description}</td>
    </tr>
  );
}

interface Props {
  assets: IconAsset[];
}

export default function AssetsTable({ assets }: Props) {
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {map(assets, (item: IconAsset) => (
          <AssetTableRow assetItem={item} />
        ))}
      </tbody>
    </Table>
  );
}
