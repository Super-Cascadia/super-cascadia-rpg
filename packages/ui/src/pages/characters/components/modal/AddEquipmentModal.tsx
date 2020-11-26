import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";
import {
  CharacterInventory,
  EQUIPMENT_LOCATIONS,
} from "@super-cascadia-rpg/api";
import Row from "react-bootstrap/Row";
import EquipmentLocation from "../EquipmentLocation";
import Col from "react-bootstrap/Col";
import { ChangeEquipmentForm } from "../form/ChangeEquipmentForm";
import { Formik, FormikHelpers, FormikValues } from "formik";
import * as yup from "yup";
import {
  CharacterInventoryState,
  CharacterInventoryStateHook,
} from "../../../../hooks/store/characterStateHooks";
import fetchCharacterInventoryDataHook from "../../../../hooks/api/characters/fetchCharacterInventoryDataHook";
import { toNumber } from "lodash";
import { DEFAULT_OPTION_ID } from "../form/controls/constants";
import Form from "react-bootstrap/Form";
import { updateCharacterEquipment } from "../../../../api/characters/equipment/updateCharacterEquipment";
import EquipmentCard from "../cards/EquipmentCard";

interface Props {
  show: boolean;
  handleClose: (item?: CharacterInventory) => void;
  equipmentLocation: EQUIPMENT_LOCATIONS;
  characterId: number;
}

export default function AddEquipmentModal({
  show,
  handleClose,
  equipmentLocation,
  characterId,
}: Props) {
  const [inventory, setInventory]: CharacterInventoryStateHook = useState(
    [] as CharacterInventoryState
  );

  useEffect(
    fetchCharacterInventoryDataHook(toNumber(characterId), setInventory),
    // @ts-ignore
    {}
  );

  function handleUpdateSuccess(actions: FormikHelpers<any>) {
    return () => {
      actions.resetForm({
        values: {
          inventoryId: "",
        },
      });
      handleClose();
    };
  }

  const handleSubmit = (values: FormikValues, actions: FormikHelpers<any>) => {
    console.log(values);

    if (values.inventoryId !== DEFAULT_OPTION_ID) {
      actions.setSubmitting(true);

      updateCharacterEquipment(
        characterId,
        values.inventoryId,
        equipmentLocation
      ).then(handleUpdateSuccess(actions));
    }
  };

  const initialFormState = {
    inventoryId: "",
  };

  const schema = yup.object({
    inventoryId: yup.string(),
  });

  return (
    <Formik
      validationSchema={schema}
      onSubmit={handleSubmit}
      initialValues={initialFormState}
    >
      {({ handleSubmit, handleChange, values }) => {
        console.log("values", values);

        return (
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Equipment Item</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Col sm={12}>
                  <Form onSubmit={handleSubmit} noValidate>
                    <ChangeEquipmentForm
                      inventory={inventory}
                      selectedInventoryId={values.inventoryId}
                      handleChange={handleChange}
                    />
                  </Form>
                </Col>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => handleSubmit()}>
                Cancel
              </Button>
              <Button variant="success" onClick={() => handleSubmit()}>
                Equip Item
              </Button>
            </Modal.Footer>
          </Modal>
        );
      }}
    </Formik>
  );
}
