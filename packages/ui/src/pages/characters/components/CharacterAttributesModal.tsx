import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import React, { SyntheticEvent, useEffect, useState } from "react";
import { CharacterAttributes } from "@super-cascadia-rpg/api";
import Form from "react-bootstrap/Form";
import { CharacterAttributeInput } from "../../../components/forms/CharacterAttributeInput";
import {
  Formik,
  FormikErrors,
  FormikHelpers,
  FormikTouched,
  FormikValues,
} from "formik";
import * as yup from "yup";
import updateCharacterAttributes from "../../../api/characterAttributes/updateCharacterAttributes";
import { isEmpty, toNumber, toString } from "lodash";
import { CharacterAttributesStateHook } from "../../../hooks/store/characterStateHooks";
import fetchCharacterAttributesDataHook from "../../../hooks/api/characters/fetchCharacterAttributesDataHook";
import Loading from "../../../components/Loading";
import { getCharacterAttributes } from "../../../api/characters/getCharacterAttributes";

interface Values {
  strength: number;
  dexterity: number;
  vitality: number;
  intelligence: number;
  mind: number;
  piety: number;
}

interface AttributesFormProps {
  values: FormikValues;
  errors: FormikErrors<Values>;
  touched: FormikTouched<Values>;
  handleChange: (event: React.SyntheticEvent) => void;
}

function CharacterAttributesForm({
  values,
  errors,
  touched,
  handleChange,
}: AttributesFormProps) {
  return (
    <>
      <CharacterAttributeInput
        id="strength"
        label="Strength"
        description="The physical strength of your character."
        onChange={(e: SyntheticEvent) => handleChange(e)}
        value={toString(values.strength)}
        touched={touched.strength}
        errors={errors.strength}
      />
      <CharacterAttributeInput
        id="dexterity"
        label="Dexterity"
        description="The reaction speed of your character."
        onChange={(e: SyntheticEvent) => handleChange(e)}
        value={toString(values.dexterity)}
        touched={touched.dexterity}
        errors={errors.dexterity}
      />
      <CharacterAttributeInput
        id="vitality"
        label="Vitality"
        description="The hardiness of your character."
        onChange={(e: SyntheticEvent) => handleChange(e)}
        value={toString(values.vitality)}
        touched={touched.vitality}
        errors={errors.vitality}
      />

      <CharacterAttributeInput
        id="intelligence"
        label="Intelligence"
        description="The intellect of your character."
        onChange={(e: SyntheticEvent) => handleChange(e)}
        value={toString(values.intelligence)}
        touched={touched.intelligence}
        errors={errors.intelligence}
      />
      <CharacterAttributeInput
        id="mind"
        label="Mind"
        description="The strength of your character's resolve"
        onChange={(e: SyntheticEvent) => handleChange(e)}
        value={toString(values.mind)}
        touched={touched.mind}
        errors={errors.mind}
      />
      <CharacterAttributeInput
        id="piety"
        label="Piety"
        description="The power of your character's faith in a higher power."
        onChange={(e: SyntheticEvent) => handleChange(e)}
        value={toString(values.piety)}
        touched={touched.piety}
        errors={errors.piety}
      />
    </>
  );
}

interface Props {
  show: boolean;
  characterAttributes: CharacterAttributes;
  handleClose: () => void;
  id: number;
}

export default function CharacterAttributesModal({
  show,
  handleClose,
  id,
}: Props) {
  const [data, setData]: CharacterAttributesStateHook = useState({
    characterAttributes: {} as CharacterAttributes,
  });
  const { characterAttributes } = data;

  useEffect(
    fetchCharacterAttributesDataHook(toNumber(id), setData),
    // @ts-ignore
    {}
  );

  const handleSubmit = (values: FormikValues, actions: FormikHelpers<any>) => {
    updateCharacterAttributes(
      characterAttributes.id,
      values as CharacterAttributes
    ).then((response) => {
      getCharacterAttributes(id).then((updatedAttributes) => {
        actions.setSubmitting(true);
        actions.resetForm({
          values: updatedAttributes,
        });
        handleClose();
      });
    });
  };

  if (isEmpty(characterAttributes)) {
    return <Loading />;
  }

  const initialFormState = {
    strength: data.characterAttributes.strength,
    dexterity: data.characterAttributes.dexterity,
    vitality: data.characterAttributes.vitality,
    intelligence: data.characterAttributes.intelligence,
    mind: data.characterAttributes.mind,
    piety: data.characterAttributes.piety,
  };

  const schema = yup.object({
    strength: yup.number().required(),
    dexterity: yup.number().required(),
    vitality: yup.number().required(),
    intelligence: yup.number().required(),
    mind: yup.number().required(),
    piety: yup.number().required(),
  });

  return (
    <Formik
      validationSchema={schema}
      onSubmit={handleSubmit}
      initialValues={initialFormState}
    >
      {({ handleSubmit, dirty, handleChange, values, touched, errors }) => {
        return (
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Character Attributes</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={handleSubmit}>
                <CharacterAttributesForm
                  values={values}
                  handleChange={handleChange}
                  touched={touched}
                  errors={errors}
                />
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => handleClose()}>
                Close
              </Button>
              <Button
                variant="primary"
                onClick={() => handleSubmit()}
                disabled={!dirty}
              >
                Save
              </Button>
            </Modal.Footer>
          </Modal>
        );
      }}
    </Formik>
  );
}
