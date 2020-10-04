interface CharacterClassSkills {
  id: 1;
  name: string;
  description: string;
}

export interface CharacterClass {
  id: 1;
  name: string;
  description: string;
  skills: CharacterClassSkills[];
}

export enum CharacterClassId {
  FREELANCER,
  ROGUE,
  WARRIOR,
  MAGE,
  DRUID,
  SORCERER,
}
