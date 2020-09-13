import React from "react";
import GridPageWrapper from "../../components/GridPageWrapper";

export default function CharacterGrid() {
  return (
    <div>
      <GridPageWrapper
        title={"Characters"}
        gridItemCount={0}
        createLink={`/character/create`}
      >
        <div>Characters go here</div>
      </GridPageWrapper>
    </div>
  );
}
