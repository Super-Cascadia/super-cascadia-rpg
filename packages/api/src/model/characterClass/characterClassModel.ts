interface CharacterClassSkills {
    id: 1,
    name: string;
    description: string;
}

export interface CharacterClass {
    id: 1;
    name: string;
    description: string;
    skills: CharacterClassSkills[]
}
