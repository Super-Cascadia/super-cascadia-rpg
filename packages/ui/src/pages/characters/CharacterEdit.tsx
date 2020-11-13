import React, { useEffect, useState, SyntheticEvent } from "react";
import { useParams } from "react-router-dom";
import { toNumber, isEmpty } from "lodash";
import { toString } from "lodash";
import Loading from "../../components/Loading";
import fetchCharacterDataHook from "../../hooks/api/characters/fetchCharacterDataHook";
import { CharacterWithAttributes } from "@super-cascadia-rpg/api";
import updateCharacter from "../../api/characters/updateCharacter";
import { ObjectDetailEditPageWrapper } from "../../components/ObjectDetailEditPageWrapper";
import { TextInput } from "../../components/forms/TextInput";
import { primaryClassOptions } from "./constants";
import { SelectInput } from "../../components/forms/SelectInput";
import {
  Formik,
  FormikErrors,
  FormikHelpers,
  FormikTouched,
  FormikValues,
} from "formik";
import * as yup from "yup";
import Form from "react-bootstrap/Form";
import { getCharacter } from "../../api/characters/getCharacter";
import Card from "react-bootstrap/Card";
import { CharacterClassId } from "@super-cascadia-rpg/api/build/src/model/characterClass/characterClassModel";
import { CharacterAttributesPanel } from "./components/CharacterAttributesPanel";

interface Values {
  firstName: string;
  lastName: string;
  description: string;
  primaryClass: number;
}

function CharacterEditForm({
  handleFormChange,
  values,
  touched,
  errors,
  character,
}: {
  handleFormChange: (event: React.SyntheticEvent) => void;
  values: FormikValues;
  touched: FormikTouched<Values>;
  errors: FormikErrors<Values>;
  character: CharacterWithAttributes;
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
        characterAttributes={character.characterAttributes}
      />
    </div>
  );
}

export default function CharacterEdit() {
  const { id: characterId } = useParams<{ id: string }>();
  const id = toNumber(characterId);
  const [data, setData] = useState({
    character: {} as CharacterWithAttributes,
  });
  const { character } = data;

  const handleSubmit = (values: FormikValues, actions: FormikHelpers<any>) => {
    actions.setSubmitting(true);
    updateCharacter(data.character).then(() => {
      getCharacter(id).then((updatedCharacter) => {
        actions.setSubmitting(false);
        setData({ character: updatedCharacter });
        actions.resetForm({
          values: updatedCharacter,
        });
      });
    });
  };

  useEffect(
    fetchCharacterDataHook({ id: id, includeAttributes: true }, setData),
    // @ts-ignore
    {}
  );

  if (isEmpty(character)) {
    return <Loading />;
  }

  const initialFormState = {
    id: data.character.id,
    firstName: data.character.firstName,
    lastName: data.character.lastName,
    description: data.character.description,
    primaryClass: CharacterClassId.FREELANCER,
  };

  const schema = yup.object({
    id: yup.number(),
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    description: yup.string().required(),
    primaryClass: yup.string().required(),
  });

  return (
    <Formik
      validationSchema={schema}
      onSubmit={handleSubmit}
      initialValues={initialFormState}
    >
      {({ handleSubmit, dirty, handleChange, values, touched, errors }) => {
        return (
          <Form onSubmit={handleSubmit} noValidate>
            <ObjectDetailEditPageWrapper
              objectId={character.id}
              name={`${character.firstName} ${character.lastName}`}
              routeName={"characters"}
              dirty={dirty}
            >
              <CharacterEditForm
                handleFormChange={handleChange}
                values={values}
                touched={touched}
                errors={errors}
                character={character}
              />
            </ObjectDetailEditPageWrapper>
          </Form>
        );
      }}
    </Formik>
  );
}
