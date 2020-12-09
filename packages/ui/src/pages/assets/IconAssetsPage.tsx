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
    <Container>
      <br />
      <Row>
        <Col md={10}>
          <h1>Icons</h1>
        </Col>
        <Col md={2}>
          <Button
            variant={"primary"}
            size={"lg"}
            block
            onClick={() => setCreateIconModalViz(true)}
          >
            New
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <AssetsTable
            assets={data}
            handleShowEditModal={handleOpenEditModal}
          />
        </Col>
      </Row>
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
    </Container>
  );
}
