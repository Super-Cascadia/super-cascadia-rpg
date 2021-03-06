import { isEmpty } from "lodash";
import Table from "react-bootstrap/Table";
import React from "react";
import Loading from "../../../../components/indicators/Loading";
import Badge from "react-bootstrap/Badge";
import { CharacterModel } from "@super-cascadia-rpg/api";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { LinkContainer } from "react-router-bootstrap";
import Button from "react-bootstrap/Button";
import { getCharacterTypeById } from "../../../../util/characterClass";

interface Props {
  characters: CharacterModel[];
  isLoading: boolean;
  handleShowDeleteModal: (id: number) => void;
  handleShowDuplicateModal: (id: number) => void;
}

function CharacterRows(
  characters: CharacterModel[],
  handleShowDeleteModal: (id: number) => void,
  handleShowDuplicateModal: (id: number) => void
) {
  return characters.map((character: CharacterModel) => {
    const classTypeName = getCharacterTypeById(character.primaryClass);

    return (
      <tr key={character.id}>
        <td>
          <Badge variant="secondary">{character.id}</Badge>
        </td>
        <td>{character.firstName}</td>
        <td>{character.lastName}</td>
        <td>{character.description}</td>
        <td>{classTypeName}</td>
        <td>
          <ButtonGroup aria-label="Character View and Edit Action Buttons">
            <LinkContainer to={`/characters/${character.id}/edit`}>
              <Button size="sm" variant="primary">
                Edit
              </Button>
            </LinkContainer>
            <LinkContainer to={`/characters/${character.id}/view/profile`}>
              <Button size="sm" variant="secondary">
                View
              </Button>
            </LinkContainer>
          </ButtonGroup>
          <ButtonGroup aria-label="Item Copy and Delete Action Buttons">
            <Button
              size="sm"
              variant="secondary"
              onClick={() => handleShowDuplicateModal(character.id)}
            >
              Copy
            </Button>
            <Button
              size="sm"
              variant="danger"
              onClick={() => handleShowDeleteModal(character.id)}
            >
              Delete
            </Button>
          </ButtonGroup>
        </td>
      </tr>
    );
  });
}

export function CharactersTable({
  characters,
  isLoading,
  handleShowDeleteModal,
  handleShowDuplicateModal,
}: Props) {
  if (isLoading) {
    return <Loading />;
  }

  if (isEmpty(characters)) {
    return <span>There are no characters, you should create some.</span>;
  }

  return (
    <Table striped hover size="sm" responsive variant="dark">
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Description</th>
          <th>Primary Class</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {CharacterRows(
          characters,
          handleShowDeleteModal,
          handleShowDuplicateModal
        )}
      </tbody>
    </Table>
  );
}
