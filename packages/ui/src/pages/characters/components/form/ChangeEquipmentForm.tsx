import {
  CharacterInventoryState,
  CharacterInventoryStateHook,
} from "../../../../hooks/store/characterStateHooks";
import React, { useEffect, useState } from "react";
import fetchCharacterInventoryDataHook from "../../../../hooks/api/characters/fetchCharacterInventoryDataHook";
import { toNumber } from "lodash";
import { Formik, FormikHelpers, FormikValues } from "formik";
import { DEFAULT_OPTION_ID } from "./controls/constants";
import * as yup from "yup";
import Form from "react-bootstrap/Form";
import InventorySelectControl from "./controls/InventorySelectControl";

export function ChangeEquipmentForm({ characterId }: { characterId: number }) {
  const [inventory, setInventory]: CharacterInventoryStateHook = useState(
    [] as CharacterInventoryState
  );

  useEffect(
    fetchCharacterInventoryDataHook(toNumber(characterId), setInventory),
    // @ts-ignore
    {}
  );

  const handleSubmit = (values: FormikValues, actions: FormikHelpers<any>) => {
    console.log(values);

    if (values.itemId !== DEFAULT_OPTION_ID) {
      actions.setSubmitting(true);
    }
  };

  const initialFormState = {
    itemId: "",
  };

  const schema = yup.object({
    itemId: yup.string(),
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
            <InventorySelectControl
              inventory={inventory}
              selectedItem={values.itemId}
              handleChange={handleChange}
            />
          </Form>
        );
      }}
    </Formik>
  );
}
