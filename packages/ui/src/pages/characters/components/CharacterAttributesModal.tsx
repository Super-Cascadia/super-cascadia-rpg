import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import React, { SyntheticEvent, useEffect, useState } from "react";
import { CharacterAttributes } from "@super-cascadia-rpg/api";
import Form from "react-bootstrap/Form";
import { CharacterAttributeInput } from "../../../components/forms/CharacterAttributeInput";
import { Formik, FormikHelpers, FormikValues } from "formik";
import * as yup from "yup";
import updateCharacterAttributes from "../../../api/characterAttributes/updateCharacterAttributes";
import { isEmpty, toNumber, toString } from "lodash";
import { CharacterAttributesStateHook } from "../../../hooks/store/characterStateHooks";
import fetchCharacterAttributesDataHook from "../../../hooks/api/characters/fetchCharacterAttributesDataHook";
import Loading from "../../../components/Loading";
import { getCharacterAttributes } from "../../../api/characters/getCharacterAttributes";

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
        console.log(values);
        return (
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Character Attributes</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={handleSubmit}>
                <CharacterAttributeInput
                  id="strength"
                  label="Strength"
                  value={toString(values.strength)}
                  onChange={(e: SyntheticEvent) => handleChange(e)}
                  description="The physical strength of your character."
                />

                <CharacterAttributeInput
                  id="dexterity"
                  label="Dexterity"
                  value={toString(values.dexterity)}
                  onChange={(e: SyntheticEvent) => handleChange(e)}
                  description="The reaction speed of your character."
                />
                <CharacterAttributeInput
                  id="vitality"
                  label="Vitality"
                  value={toString(values.vitality)}
                  onChange={(e: SyntheticEvent) => handleChange(e)}
                  description="The hardiness of your character."
                />

                <CharacterAttributeInput
                  id="intelligence"
                  label="Intelligence"
                  value={toString(values.intelligence)}
                  onChange={(e: SyntheticEvent) => handleChange(e)}
                  description="The intellect of your character."
                />
                <CharacterAttributeInput
                  id="mind"
                  label="Mind"
                  value={toString(values.mind)}
                  onChange={(e: SyntheticEvent) => handleChange(e)}
                  description="The strength of your character's resolve"
                />

                <CharacterAttributeInput
                  id="piety"
                  label="Piety"
                  value={toString(values.piety)}
                  onChange={(e: SyntheticEvent) => handleChange(e)}
                  description="The power of your character's faith in a higher power."
                />
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => handleClose()}>
                Close
              </Button>
              <Button variant="primary" onClick={() => handleSubmit()}>
                Save
              </Button>
            </Modal.Footer>
          </Modal>
        );
      }}
    </Formik>
  );
}
