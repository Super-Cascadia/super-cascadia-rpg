import React, { useEffect, useState } from "react";
import AssetsTable from "./components/table/AssetsTable";
import fetchIconAssetDataHook from "../../hooks/api/assets/fetchIconAssetDataHook";
import { IconAsset } from "@super-cascadia-rpg/api/build/src/db/entity/assets/icons/IconAsset";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export type IconAssetsStateHook = [IconAsset[], (data: any) => void];

export default function IconAssetsPage() {
  const [data, setData]: IconAssetsStateHook = useState({} as IconAsset[]);
  const fetchIcons = fetchIconAssetDataHook(setData);

  // @ts-ignore
  useEffect(fetchIcons, []);

  return (
    <Container>
      <Row>
        <h1>Icon Assets</h1>
      </Row>
      <Row>
        <AssetsTable assets={data} />
      </Row>
    </Container>
  );
}
