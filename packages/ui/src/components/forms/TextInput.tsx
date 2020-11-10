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
  touched?: boolean;
  errors?: string;
}

export function TextInput({
  onChange,
  id,
  label,
  inputDescription,
  readOnly = false,
  defaultValue,
  value,
  touched,
  errors,
}: Props) {
  return (
    <Form.Group as={Row} controlId={id}>
      <Form.Label column sm="2">
        {label}
      </Form.Label>
      <Col sm="10">
        <Form.Control
          as="input"
          plaintext={readOnly}
          readOnly={readOnly}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          isInvalid={touched && !!errors}
          isValid={touched && !errors}
        />
        {errors && (
          <Form.Control.Feedback type="invalid">{errors}</Form.Control.Feedback>
        )}
        {/*{inputDescription && (*/}
        {/*  <Form.Text className="text-muted">{inputDescription}</Form.Text>*/}
        {/*)}*/}
      </Col>
    </Form.Group>
  );
}
