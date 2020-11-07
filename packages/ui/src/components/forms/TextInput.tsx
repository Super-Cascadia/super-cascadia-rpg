import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

interface Props {
  label: string;
  id: string;
  inputDescription?: string;
  onChange?: (e: React.SyntheticEvent) => void;
  readOnly?: boolean;
  value?: string;
  defaultValue?: string | number;
}

export function TextInput({
  onChange,
  id,
  label,
  inputDescription,
  readOnly = false,
  defaultValue,
  value,
}: Props) {
  return (
    <Form.Group as={Row} controlId={id}>
      <Form.Label column sm="2">
        {label}
      </Form.Label>
      <Col sm="10">
        <Form.Control
          as="input"
          readOnly={readOnly}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
        />
        {inputDescription && (
          <Form.Text className="text-muted">{inputDescription}</Form.Text>
        )}
      </Col>
    </Form.Group>
  );
}
