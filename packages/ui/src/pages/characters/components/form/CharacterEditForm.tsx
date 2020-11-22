import React, { SyntheticEvent } from "react";
import { FormikErrors, FormikTouched, FormikValues } from "formik";
import { toString } from "lodash";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { TextInput } from "../../../../components/forms/TextInput";
import { SelectInput } from "../../../../components/forms/SelectInput";
import { primaryClassOptions } from "../../constants";
import { CharacterAttributesPanel } from "../CharacterAttributesPanel";
import { CharacterWithAttributes } from "@super-cascadia-rpg/api";

interface Values {
  firstName: string;
  lastName: string;
  description: string;
  primaryClass: number;
}

export default function CharacterEditForm({
  handleFormChange,
  values,
  touched,
  errors,
  character,
  onRefresh,
}: {
  handleFormChange: (event: React.SyntheticEvent) => void;
  values: FormikValues;
  touched: FormikTouched<Values>;
  errors: FormikErrors<Values>;
  character: CharacterWithAttributes;
  onRefresh: () => void;
}) {
  const primaryClassString = toString(values.primaryClass);

  return (
    <div>
      <Card>
        <Card.Header>Profile</Card.Header>
        <Card.Body>
          <Form.Row>
            <TextInput
              label="First Name"
              id="firstName"
              value={values.firstName}
              touched={touched.firstName}
              errors={errors.firstName}
              onChange={(e: SyntheticEvent) => handleFormChange(e)}
            />

            <TextInput
              label={"Last Name"}
              id={"lastName"}
              value={values.lastName}
              touched={touched.lastName}
              errors={errors.lastName}
              onChange={(e: SyntheticEvent) => handleFormChange(e)}
            />
          </Form.Row>

          <Form.Row>
            <TextInput
              label={"Description"}
              id={"description"}
              inputDescription={"a description of the character"}
              value={values.description}
              touched={touched.description}
              errors={errors.description}
              onChange={(e: SyntheticEvent) => handleFormChange(e)}
            />
          </Form.Row>

          <Form.Row>
            <SelectInput
              label={"Primary Class"}
              id={"primaryClass"}
              options={primaryClassOptions}
              value={primaryClassString}
              onChange={(e: SyntheticEvent) => handleFormChange(e)}
              inputDescription="The Primary class of the character. Determines key attributes and modifiers."
            />
          </Form.Row>
        </Card.Body>
      </Card>

      <br />
      <CharacterAttributesPanel
        id={character.id}
        attributes={character.attributes}
        onRefresh={onRefresh}
      />
    </div>
  );
}
