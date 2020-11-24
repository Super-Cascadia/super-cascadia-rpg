import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";
import { CharacterInventory } from "@super-cascadia-rpg/api";
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
import updateCharacterEquipment from "../../../../api/characters/equipment/updateCharacterEquipment";

interface Props {
  show: boolean;
  handleClose: (item?: CharacterInventory) => void;
  selectedItem: CharacterInventory;
  equipmentLocation: string;
  characterId: number;
}

export default function ChangeEquipmentModal({
  show,
  handleClose,
  selectedItem,
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

  const handleSubmit = (values: FormikValues, actions: FormikHelpers<any>) => {
    console.log(values);

    if (values.inventoryId !== DEFAULT_OPTION_ID) {
      actions.setSubmitting(true);

      updateCharacterEquipment(
        characterId,
        values.inventoryId,
        equipmentLocation
      ).then((response) => {
        actions.resetForm({
          values: {
            inventoryId: "",
          },
        });
        handleClose();
      });
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
      {({ handleSubmit, dirty, handleChange, values, touched, errors }) => {
        console.log("values", values);

        return (
          <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Header closeButton>
              <Modal.Title>Change Equipment</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Col>
                  <p>Choose a new item.</p>
                </Col>
              </Row>
              <Row>
                <Col sm={2} />
                <Col sm={4}>
                  <h3>Current Item</h3>
                  <EquipmentLocation
                    headerTitle={equipmentLocation}
                    item={selectedItem}
                  />
                </Col>
                <Col sm={4}>
                  <h3>New Item</h3>
                  <Form onSubmit={handleSubmit} noValidate>
                    <ChangeEquipmentForm
                      inventory={inventory}
                      selectedInventoryId={values.inventoryId}
                      handleChange={handleChange}
                    />
                  </Form>
                </Col>
                <Col sm={2} />
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => handleClose()}>
                Cancel
              </Button>
              <Button
                variant="success"
                onClick={() => handleClose(selectedItem)}
              >
                Change Item
              </Button>
            </Modal.Footer>
          </Modal>
        );
      }}
    </Formik>
  );
}
