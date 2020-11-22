import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toNumber, isEmpty } from "lodash";
import Loading from "../../components/Loading";
import fetchCharacterDataHook from "../../hooks/api/characters/fetchCharacterDataHook";
import { CharacterWithAttributes } from "@super-cascadia-rpg/api";
import updateCharacter from "../../api/characters/updateCharacter";
import { ObjectDetailEditPageWrapper } from "../../components/ObjectDetailEditPageWrapper";
import { Formik, FormikHelpers, FormikValues } from "formik";
import * as yup from "yup";
import Form from "react-bootstrap/Form";
import { getCharacter } from "../../api/characters/getCharacter";
import { CharacterClassId } from "@super-cascadia-rpg/api/build/src/model/characterClass/characterClassModel";
import CharacterEditForm from "./components/form/CharacterEditForm";

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

  const reloadData = () => {
    getCharacter(toNumber(id), true).then((data) => {
      setData(data);
    });
  };

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
                onRefresh={reloadData}
              />
            </ObjectDetailEditPageWrapper>
          </Form>
        );
      }}
    </Formik>
  );
}
