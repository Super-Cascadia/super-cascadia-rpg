import React from "react";
import Badge from "react-bootstrap/Badge";
import { StandardIconV2 } from "../../../../../../components/icons/StandardIcon";

export function EmptyCell() {
  return <Badge variant="light">--</Badge>;
}

export function BadgeCell(value: number) {
  if (!value) {
    return <EmptyCell />;
  }

  return <Badge variant="primary">{value}</Badge>;
}

export function BooleanBadgeCell(value: boolean) {
  if (!value) {
    return <EmptyCell />;
  }

  const renderedValue = value ? "Yes" : "No";
  const variant = value ? "success" : "light";

  return <Badge variant={variant}>{renderedValue}</Badge>;
}

export function MonetaryValueCell(value: string) {
  if (!value) {
    return <EmptyCell />;
  }

  return <span>${value}</span>;
}

export function EffectFactorBadgeCell(value: string) {
  if (!value) {
    return <EmptyCell />;
  }

  return <Badge variant="info">{value}</Badge>;
}

export function IconCell(value: string) {
  if (!value) {
    return <EmptyCell />;
  }

  return <StandardIconV2 icon={value} />;
}
