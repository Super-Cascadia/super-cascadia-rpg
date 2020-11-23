import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";
import { CharacterInventory } from "@super-cascadia-rpg/api";
import Row from "react-bootstrap/Row";
import EquipmentLocation from "../EquipmentLocation";
import Col from "react-bootstrap/Col";
import { toNumber } from "lodash";
import {
  CharacterInventoryState,
  CharacterInventoryStateHook,
} from "../../../../hooks/store/characterStateHooks";
import fetchCharacterInventoryDataHook from "../../../../hooks/api/characters/fetchCharacterInventoryDataHook";
import InventorySelectControl from "../form/controls/InventorySelectControl";
import { Formik, FormikHelpers, FormikValues } from "formik";
import * as yup from "yup";
import { DEFAULT_OPTION_ID } from "../form/controls/constants";
import Form from "react-bootstrap/Form";

function ChangeEquipmentForm({ characterId }: { characterId: number }) {
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
  return (
    <Modal show={show} onHide={handleClose}>
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
          <Col>
            <h3>Current Item</h3>
            <EquipmentLocation
              headerTitle={equipmentLocation}
              image="icon506.png"
              item={selectedItem}
            />
          </Col>
          <Col>
            <h3>New Item</h3>
            <ChangeEquipmentForm characterId={characterId} />
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => handleClose()}>
          Cancel
        </Button>
        <Button variant="success" onClick={() => handleClose(selectedItem)}>
          Change Item
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
