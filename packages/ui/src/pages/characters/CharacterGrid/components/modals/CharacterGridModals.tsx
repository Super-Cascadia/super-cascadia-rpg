import React from "react";
import { CharacterModel } from "@super-cascadia-rpg/api";
import { DeleteCharacterModal, DuplicateCharacterModal } from "./CharacterModals";

interface Props {
  selectedCharacter: CharacterModel | undefined;
  closeDeleteModal: (id?: number) => void;
  showDeleteModal: boolean;
  closeDuplicateModal: (id?: number) => void;
  showDuplicateModal: boolean;
}

function CharacterGridModals({
  selectedCharacter,
  closeDeleteModal,
  showDeleteModal,
  closeDuplicateModal,
  showDuplicateModal,
}: Props) {
  return (
    <>
      {selectedCharacter ? (
        <DeleteCharacterModal
          handleClose={closeDeleteModal}
          selectedCharacter={selectedCharacter}
          show={showDeleteModal}
        />
      ) : null}
      {selectedCharacter ? (
        <DuplicateCharacterModal
          handleClose={closeDuplicateModal}
          selectedCharacter={selectedCharacter}
          show={showDuplicateModal}
        />
      ) : null}
    </>
  );
}

export default CharacterGridModals;
