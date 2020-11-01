import { CharacterClassId } from "@super-cascadia-rpg/api/build/src/model/characterClass/characterClassModel";

export const getCharacterTypeById = (id: number) => {
    switch (id) {
        case CharacterClassId.FREELANCER:
            return "Freelancer";
        case CharacterClassId.ROGUE:
            return "Rogue";
        case CharacterClassId.WARRIOR:
            return "Warrior";
        case CharacterClassId.MAGE:
            return "Mage";
        case CharacterClassId.DRUID:
            return "Druid";
        case CharacterClassId.SORCERER:
            return "Sorcerer";
    }
};
