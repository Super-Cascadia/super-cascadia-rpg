import React, { useEffect, useState } from "react";
import AssetsTable from "./components/table/AssetsTable";
import fetchIconAssetDataHook from "../../hooks/api/assets/fetchIconAssetDataHook";
import { IconAsset } from "@super-cascadia-rpg/api/build/src/db/entity/assets/icons/IconAsset";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import CreateIconAssetModal from "./components/modal/CreateIconAssetModal";
import { getIconAssets } from "../../api/assets/icons/getIconAssets";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import EditIconAssetModal from "./components/modal/EditIconAssetModal";
import GridPageWrapperV2 from "../../components/pageWrapper/GridPageWrapperV2";

export type IconAssetsStateHook = [IconAsset[], (data: any) => void];

export default function IconAssetsPage() {
  const [showCreateIconModal, setCreateIconModalViz] = useState<boolean>(false);
  const [showEditIconModal, setEditIconModalViz] = useState<boolean>(false);
  const [selectedIcon, setSelectedIcon] = useState<IconAsset | null>(null);
  const [data, setData]: IconAssetsStateHook = useState({} as IconAsset[]);
  // @ts-ignore
  useEffect(fetchIconAssetDataHook(setData), []);

  const reloadData = () => {
    getIconAssets().then(setData);
  };

  const handleCloseCreateIconModal = () => {
    setCreateIconModalViz(false);
    reloadData();
  };

  const handleCloseEditIconModal = () => {
    setEditIconModalViz(false);
    reloadData();
  };

  const handleOpenEditModal = (iconAsset: IconAsset) => {
    setSelectedIcon(iconAsset);
    setEditIconModalViz(true);
  };

  return (
    <GridPageWrapperV2 handleNewButtonClick={() => setCreateIconModalViz(true)}>
      <>
        <AssetsTable assets={data} handleShowEditModal={handleOpenEditModal} />
        {showCreateIconModal && (
          <CreateIconAssetModal
            show={showCreateIconModal}
            handleClose={handleCloseCreateIconModal}
          />
        )}
        {showEditIconModal && selectedIcon && (
          <EditIconAssetModal
            iconAsset={selectedIcon}
            show={showEditIconModal}
            handleClose={handleCloseEditIconModal}
          />
        )}
      </>
    </GridPageWrapperV2>
  );
}
