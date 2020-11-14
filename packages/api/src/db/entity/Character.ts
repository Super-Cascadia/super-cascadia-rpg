import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  OneToMany,
} from "typeorm";
import { CharacterClassId } from "../../model/characterClass/characterClassModel";
import { CharacterAttributes } from "./CharacterAttributes";
import { CharacterInventory } from "./CharacterInventory";

@Entity()
export class Character {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  firstName!: string;

  @Column()
  lastName!: string;

  @Column()
  description!: string;

  @Column()
  primaryClass!: CharacterClassId;

  @OneToOne(
    (type) => CharacterAttributes,
    (characterAttributes) => characterAttributes.character
  )
  // @ts-ignore
  characterAttributes: CharacterAttributes;

  @OneToMany(
    () => CharacterInventory,
    (characterInventory) => characterInventory.character
  )
  // @ts-ignore
  items: CharacterInventory[];
}
