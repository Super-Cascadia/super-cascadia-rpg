import Card from "react-bootstrap/Card";
import React, { useState } from "react";
import { CharacterAttributes } from "@super-cascadia-rpg/api";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import CharacterAttributesModal from "./modal/CharacterAttributesModal";
import { CharacterAttributesForm } from "./form/CharacterAttributesReadOnlyForm";

interface Props {
  characterAttributes: CharacterAttributes;
  onRefresh: () => void;
  id: number;
}

export function CharacterAttributesPanel({
  characterAttributes,
  onRefresh,
  id,
}: Props) {
  const [showAttributesModal, setModalViz] = useState<boolean>(false);

  const handleClose = () => {
    setModalViz(false);
    onRefresh();
  };

  return (
    <div>
      <Card>
        <Card.Header>
          <Row>
            <Col xs={11}>
              <h3>Attributes</h3>
            </Col>
            <Col xs={1} className="card-controls">
              <Button size="sm" onClick={() => setModalViz(true)}>
                Edit
              </Button>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body>
          <CharacterAttributesForm characterAttributes={characterAttributes} />
        </Card.Body>
      </Card>
      {showAttributesModal && (
        <CharacterAttributesModal
          id={id}
          show={showAttributesModal}
          characterAttributes={characterAttributes}
          handleClose={handleClose}
        />
      )}
    </div>
  );
}
