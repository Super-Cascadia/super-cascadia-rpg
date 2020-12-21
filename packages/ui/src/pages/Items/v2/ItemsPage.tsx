import React, { useState } from "react";
import GridPageWrapperV2 from "../../../components/pageWrapper/GridPageWrapperV2";

export default function ItemsPage() {
  const [showCreateItemModal, setCreateItemModalViz] = useState<boolean>(false);

  return (
    <GridPageWrapperV2
      handleNewButtonClick={() => setCreateItemModalViz(true)}
      title="Items"
    >
      <div>Table goes here</div>
    </GridPageWrapperV2>
  );
}
