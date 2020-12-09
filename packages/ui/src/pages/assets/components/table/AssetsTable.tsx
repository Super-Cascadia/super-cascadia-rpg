import { map } from "lodash";
import Table from "react-bootstrap/Table";
import React from "react";
import Badge from "react-bootstrap/Badge";
import { IconAsset } from "@super-cascadia-rpg/api/build/src/db/entity/assets/icons/IconAsset";
import { StandardIconV2 } from "../../../../components/icons/StandardIcon";
import IconAssetTableActions from "../../../../components/table/IconAssetTableActions";

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
      <td>
        <IconAssetTableActions
          iconAsset={assetItem}
          handleShowEditModal={handleShowEditModal}
        />
      </td>
    </tr>
  );
}

interface Props {
  assets: IconAsset[];
  handleShowEditModal: (iconAsset: IconAsset) => void;
}

export default function AssetsTable({ assets, handleShowEditModal }: Props) {
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
