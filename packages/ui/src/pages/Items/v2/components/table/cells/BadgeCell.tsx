import React from "react";
import Badge from "react-bootstrap/Badge";

export default function BadgeCell(value: number) {
  return <Badge variant="primary">{value}</Badge>;
}
