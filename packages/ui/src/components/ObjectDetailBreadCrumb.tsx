import Breadcrumb from "react-bootstrap/Breadcrumb";
import { capitalize } from "lodash";
import React from "react";

interface Props {
  objectId: number;
  routeName: string;
}

export const ObjectDetailBreadCrumb = ({ routeName, objectId }: Props) => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href={`/${routeName}`}>
        {capitalize(routeName)}
      </Breadcrumb.Item>
      <Breadcrumb.Item active>{objectId}</Breadcrumb.Item>
      <Breadcrumb.Item>View</Breadcrumb.Item>
    </Breadcrumb>
  );
};
