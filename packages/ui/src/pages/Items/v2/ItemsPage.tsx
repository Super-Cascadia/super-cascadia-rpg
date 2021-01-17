import React, { useState } from "react";
import GridPageWrapperV2 from "../../../components/pageWrapper/GridPageWrapperV2";
import { ItemsPageRoutes } from "../../../routes/Routes";
import ItemsPageNav from "./components/nav/ItemsPageNav";

export interface TableColumn {
  fieldName: string;
  title: string;
  renderer?: (value?: any) => JSX.Element;
}

export interface TableColumnRendered {
  key: string;
  value: any;
  renderedValue: JSX.Element | null;
}

export default function ItemsPage() {
  const [showCreateItemModal, setCreateItemModalViz] = useState<boolean>(false);

  return (
    <GridPageWrapperV2
      handleNewButtonClick={() => setCreateItemModalViz(true)}
      title="Items"
    >
      <>
        <ItemsPageNav />
        <br />
        <ItemsPageRoutes />
      </>
    </GridPageWrapperV2>
  );
}
