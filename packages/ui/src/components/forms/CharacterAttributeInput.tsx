import React, { SyntheticEvent } from "react";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

interface Props {
  id: string;
  defaultValue?: string | number;
  label: string;
  description?: string;
  readOnly?: boolean;
  handleChange?: (event: React.SyntheticEvent) => void;
}

export function CharacterAttributeInput({
  defaultValue,
  label,
  id,
  description,
  readOnly = false,
  handleChange,
}: Props) {
  return (
    <Form.Group as={Col}>
      <InputGroup size="sm">
        <InputGroup.Prepend>
          <InputGroup.Text id={id}>{label}</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          readOnly={readOnly}
          defaultValue={defaultValue}
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          onChange={handleChange}
        />
      </InputGroup>
      {description && (
        <Form.Text className="text-muted">{description}</Form.Text>
      )}
    </Form.Group>
  );
}
