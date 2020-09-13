import React from "react";
import DetailPageWrapper from "../../components/DetailPageWrapper";

export default function CharacterView() {
  return (
    <DetailPageWrapper objectId={123} name={"foo"} routeName={"characters"}>
      <div>Form goes here</div>
    </DetailPageWrapper>
  );
}
