import React, { useState } from "react";
import GridPageWrapperV2 from "../../../components/pageWrapper/GridPageWrapperV2";

export default function ItemsPage() {
  const [showCreateItemModal, setCreateItemModalViz] = useState<boolean>(false);

  return (
    <GridPageWrapperV2 handleNewButtonClick={() => setCreateItemModalViz(true)}>
      <div>Table goes here</div>
    </GridPageWrapperV2>
  );
}
