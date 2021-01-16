import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

interface Props {
  label: string;
  id: string;
  inputDescription?: string;
  onChange?: (e: React.SyntheticEvent) => void;
  readOnly?: boolean;
  value?: string;
  defaultValue?: boolean;
  touched?: boolean;
  errors?: string;
  checked?: boolean;
}

export function SwitchInput({
  onChange,
  id,
  label,
  inputDescription,
  defaultValue,
  value,
  touched,
  errors,
  checked,
}: Props) {
  return <Form.Check type="switch" id={id} label={label} checked={checked} />;
}
