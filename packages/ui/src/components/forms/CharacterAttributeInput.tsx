import React from "react";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";

interface Props {
  id: string;
  defaultValue?: string | number;
  label: string;
}

export function CharacterAttributeInput({ defaultValue, label, id }: Props) {
  return (
    <InputGroup size="sm" className="mb-3">
      <InputGroup.Prepend>
        <InputGroup.Text id={id}>{label}</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        readOnly
        defaultValue={defaultValue}
        aria-label="Small"
        aria-describedby="inputGroup-sizing-sm"
      />
    </InputGroup>
  );
}
