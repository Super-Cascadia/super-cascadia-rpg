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

export type IconAssetsStateHook = [IconAsset[], (data: any) => void];

export default function IconAssetsPage() {
  const [showCreateIconModal, setCreatIconModalViz] = useState<boolean>(false);
  const [data, setData]: IconAssetsStateHook = useState({} as IconAsset[]);
  const fetchIcons = fetchIconAssetDataHook(setData);

  // @ts-ignore
  useEffect(fetchIcons, []);

  const reloadData = () => {
    getIconAssets().then(setData);
  };

  const handleCloseCreateIconModal = () => {
    setCreatIconModalViz(false);
    reloadData();
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
            onClick={() => setCreatIconModalViz(true)}
          >
            New
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <AssetsTable assets={data} />
        </Col>
      </Row>
      {showCreateIconModal && (
        <CreateIconAssetModal
          show={showCreateIconModal}
          handleClose={handleCloseCreateIconModal}
        />
      )}
    </Container>
  );
}
