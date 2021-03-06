import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

interface Props {
  id: string;
  defaultValue?: string | number;
  label: string;
  description?: string;
  readOnly?: boolean;
  onChange?: (event: React.SyntheticEvent) => void;
  value?: string;
  touched?: boolean;
  errors?: string;
}

export function CharacterAttributeInput({
  defaultValue,
  label,
  id,
  description,
  readOnly = false,
  onChange,
  value,
  errors,
  touched,
}: Props) {
  return (
    <Form.Group as={Col} controlId={id}>
      <InputGroup size="sm">
        <InputGroup.Prepend>
          <InputGroup.Text>{label}</InputGroup.Text>
        </InputGroup.Prepend>
        <Form.Control
          as="input"
          value={value}
          readOnly={readOnly}
          defaultValue={defaultValue}
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          onChange={onChange}
          isInvalid={touched && !!errors}
          isValid={touched && !errors}
        />
        {errors && (
          <Form.Control.Feedback type="invalid">{errors}</Form.Control.Feedback>
        )}
      </InputGroup>
      {description && (
        <Form.Text className="text-muted">{description}</Form.Text>
      )}
    </Form.Group>
  );
}
