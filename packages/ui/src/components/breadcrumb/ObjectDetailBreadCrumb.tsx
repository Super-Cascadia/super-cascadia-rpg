import Breadcrumb from "react-bootstrap/Breadcrumb";
import { capitalize } from "lodash";
import React from "react";

interface Props {
  objectId: number;
  routeName: string;
  detailPageName: string;
}

export const ObjectDetailBreadCrumb = ({
  routeName,
  objectId,
  detailPageName,
}: Props) => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href={`/${routeName}`}>
        {capitalize(routeName)}
      </Breadcrumb.Item>
      <Breadcrumb.Item active>{objectId}</Breadcrumb.Item>
      <Breadcrumb.Item>{detailPageName}</Breadcrumb.Item>
    </Breadcrumb>
  );
};
