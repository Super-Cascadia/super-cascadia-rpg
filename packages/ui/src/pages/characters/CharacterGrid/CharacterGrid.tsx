import React, {useEffect, useState} from "react";
import GridPageWrapper from "../../../components/GridPageWrapper";
import {CharactersTable} from "./components/CharactersTable";
import fetchCharactersDataHook from "../../../hooks/api/characters/fetchCharactersDataHook";
import deleteCharacter from "../../../api/characters/deleteCharacter";
import CharacterGridModals from "./components/modals/CharacterGridModals";
import {CharacterModel} from "@super-cascadia-rpg/api";
import duplicateCharacter from "../../../api/characters/duplicateCharacter";

export default function CharacterGrid() {
    const [isLoading, setLoadingState] = useState<boolean>(true);
    const [characterData, setItemData] = useState<CharacterModel[]>([]);
    const [showDeleteModal, setDeleteModalVisibility] = useState<boolean>(
        false
    );
    const [showDuplicateModal, setDuplicateModalVisibility] = useState<boolean>(false);
    const [selectedCharacterId, setSelectedCharacterId] = useState<number | null>(null);
    const selectedCharacter = characterData?.find((character) => character.id === selectedCharacterId);
    const fetchCharacters = fetchCharactersDataHook(setItemData, setLoadingState);

    // @ts-ignore
    useEffect(fetchCharacters, []);

    const handleCloseDeleteModal = (id?: number) => {
        if (id) {
            setLoadingState(true);
            deleteCharacter(id).then(fetchCharacters);
        }
        setDeleteModalVisibility(false);
    };
    const handleShowDeleteModal = (id: number) => {
        setSelectedCharacterId(id);
        setDeleteModalVisibility(true);
    };
    const handleShowDuplicateModal = (id: number) => {
        setSelectedCharacterId(id);
        setDuplicateModalVisibility(true);
    };
    const handleCloseDuplicateModal = (id?: number) => {
        if (id) {
            setLoadingState(true);
            duplicateCharacter(id).then(fetchCharacters);
        }
        setDuplicateModalVisibility(false);
    };

    return (
        <div>
            <GridPageWrapper
                title={"Characters"}
                gridItemCount={0}
                createLink={`/characters/create`}
            >
                <CharactersTable isLoading={false} characters={characterData}
                                 handleShowDeleteModal={handleShowDeleteModal}
                                 handleShowDuplicateModal={handleShowDuplicateModal}/>
            </GridPageWrapper>
            <CharacterGridModals
                selectedCharacter={selectedCharacter}
                closeDeleteModal={handleCloseDeleteModal}
                showDeleteModal={showDeleteModal}
                closeDuplicateModal={handleCloseDuplicateModal}
                showDuplicateModal={showDuplicateModal}
            />
        </div>
    );
}
