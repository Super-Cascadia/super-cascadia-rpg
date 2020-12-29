import React from "react";
import Badge from "react-bootstrap/Badge";
import { StandardIconV2 } from "../../../../../../components/icons/StandardIcon";

export function EmptyCell() {
  return <span>--</span>;
}

export function BadgeCell(value: number) {
  return <Badge variant="primary">{value}</Badge>;
}

export function BooleanBadgeCell(value: boolean) {
  const renderedValue = value ? "Yes" : "No";
  const variant = value ? "success" : "light";

  return <Badge variant={variant}>{renderedValue}</Badge>;
}

export function EffectFactorBadgeCell(value: string) {
  if (!value) {
    return <Badge variant="light">--</Badge>;
  }

  return <Badge variant="info">{value}</Badge>;
}

export function IconCell(value: string) {
  return <StandardIconV2 icon={value} />;
}
