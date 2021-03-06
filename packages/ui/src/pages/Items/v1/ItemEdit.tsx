import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";
import fetchItemDataHook from "../../../hooks/api/items/v1/fetchItemDataHook";
import { toNumber, isEmpty } from "lodash";
import { toString } from "lodash";
import updateItem from "../../../api/items/v1/updateItem";
import { Item } from "@super-cascadia-rpg/api";
import Loading from "../../../components/indicators/Loading";
import { ObjectDetailEditPageWrapper } from "../../../components/pageWrapper/ObjectDetailEditPageWrapper";
import { TextInput } from "../../../components/forms/TextInput";
import { itemTypeOptions } from "../constants";
import { SelectInput } from "../../../components/forms/SelectInput";
import {
  Formik,
  FormikErrors,
  FormikHelpers,
  FormikTouched,
  FormikValues,
} from "formik";
import * as yup from "yup";
import { getItem } from "../../../api/items/v1/getItem";

interface Values {
  id: number;
  name: string;
  description: string;
  type: number;
}

function ItemEditForm({
  handleFormChange,
  values,
  touched,
  errors,
}: {
  handleFormChange: (event: React.SyntheticEvent) => void;
  values: FormikValues;
  touched: FormikTouched<Values>;
  errors: FormikErrors<Values>;
}) {
  return (
    <>
      <TextInput label="ID" id="id" readOnly defaultValue={values.id} />

      <TextInput
        label="Name"
        id="name"
        inputDescription="The name of the item."
        onChange={handleFormChange}
        value={values.name}
        touched={touched.name}
        errors={errors.name}
      />

      <TextInput
        label={"Description"}
        id={"description"}
        inputDescription="a description of the item"
        onChange={handleFormChange}
        value={values.description}
        touched={touched.description}
        errors={errors.description}
      />

      <TextInput
        label={"Icon"}
        id={"icon"}
        inputDescription="an icon for the item"
        onChange={handleFormChange}
        value={values.icon}
      />

      <SelectInput
        onChange={handleFormChange}
        label="Item Type"
        id="type"
        inputDescription="The classification of the item."
        options={itemTypeOptions}
        value={toString(values.type)}
      />
    </>
  );
}

export default function ItemEdit() {
  const { id: itemId } = useParams<{ id: string }>();
  const id = toNumber(itemId);
  const [data, setData] = useState({ item: {} as Item });
  const { item } = data;

  const handleSubmit = (values: FormikValues, actions: FormikHelpers<any>) => {
    actions.setSubmitting(true);
    updateItem(values as Item).then(() => {
      getItem(id).then((updatedItem) => {
        actions.setSubmitting(false);
        setData({ item: updatedItem });
        actions.resetForm({
          values: updatedItem,
        });
      });
    });
  };

  // @ts-ignore
  useEffect(fetchItemDataHook(id, setData), {});

  if (isEmpty(item)) {
    return <Loading />;
  }

  const initialFormState = {
    id: data.item.id,
    name: data.item.name,
    description: data.item.description,
    type: data.item.type,
    icon: data.item.icon,
  };

  const schema = yup.object({
    id: yup.number(),
    name: yup.string().required(),
    description: yup.string().required(),
    type: yup.string().required(),
    icon: yup.string().required(),
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
              objectId={values.id}
              name={data.item.name}
              routeName={"items"}
              dirty={dirty}
            >
              <ItemEditForm
                handleFormChange={handleChange}
                values={values}
                touched={touched}
                errors={errors}
              />
            </ObjectDetailEditPageWrapper>
          </Form>
        );
      }}
    </Formik>
  );
}
