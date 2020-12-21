import { map } from "lodash";
import Table from "react-bootstrap/Table";
import React from "react";
import Badge from "react-bootstrap/Badge";
import { StandardIconV2 } from "../../../../../components/icons/StandardIcon";
import { IconAsset } from "@super-cascadia-rpg/api/src/db/entity/assets/icons/IconAsset";

function AssetTableRow({
  assetItem,
  handleShowEditModal,
}: {
  assetItem: IconAsset;
  handleShowEditModal: (iconAsset: IconAsset) => void;
}) {
  return (
    <tr>
      <td>
        <Badge variant="primary">{assetItem.id}</Badge>
      </td>
      <td>
        <StandardIconV2 icon={assetItem.assetPath} />
      </td>
      <td>{assetItem.name}</td>
      <td>{assetItem.description}</td>
      <td>Actions</td>
    </tr>
  );
}

interface Props {
  assets: IconAsset[];
  handleShowEditModal: (iconAsset: IconAsset) => void;
}

export default function ItemsPageTable({ assets, handleShowEditModal }: Props) {
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
        {map(assets, (item: IconAsset) => (
          <AssetTableRow
            assetItem={item}
            handleShowEditModal={handleShowEditModal}
          />
        ))}
      </tbody>
    </Table>
  );
}
