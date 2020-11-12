import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { map } from "lodash";

export interface SelectOption {
  id: number;
  label: string;
}

interface Props {
  label: string;
  id: string;
  inputDescription?: string;
  onChange?: (e: React.SyntheticEvent) => void;
  options: SelectOption[];
  readOnly?: boolean;
  defaultValue?: string;
  value?: string;
}

export function SelectInput({
  onChange,
  label,
  id,
  inputDescription,
  options,
  readOnly,
  defaultValue,
  value,
}: Props) {
  return (
    <Form.Group as={Col} controlId={id} onChange={onChange}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        as="select"
        readOnly={readOnly}
        value={value}
        disabled={readOnly}
        defaultValue={defaultValue}
      >
        {map(options, (option) => {
          return <option value={option.id}>{option.label}</option>;
        })}
      </Form.Control>
      <Form.Text className="text-muted">{inputDescription}</Form.Text>
    </Form.Group>
  );
}
