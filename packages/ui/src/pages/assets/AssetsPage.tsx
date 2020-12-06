import React from "react";
import GridPageWrapper from "../../components/pageWrapper/GridPageWrapper";

export default function AssetsPage() {
  return (
    <div>
      <GridPageWrapper
        title={"Icon Assets"}
        gridItemCount={0}
        createLink={`/assets/create`}
      >
        <div>Table goes here</div>
      </GridPageWrapper>
    </div>
  );
}
