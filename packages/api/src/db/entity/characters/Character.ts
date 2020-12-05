import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  OneToMany,
} from "typeorm";
import { CharacterClassId } from "../../../model/characterClass/characterClassModel";
import { CharacterAttributes } from "./CharacterAttributes";
import { CharacterInventory } from "./CharacterInventory";
import { CharacterEquipment } from "./CharacterEquipment";

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

  @OneToOne((type) => CharacterAttributes, (attributes) => attributes.character)
  // @ts-ignore
  attributes: CharacterAttributes;

  @OneToOne((type) => CharacterEquipment, (inventory) => inventory.character)
  // @ts-ignore
  equipment: CharacterEquipment;

  @OneToMany(
    () => CharacterInventory,
    (characterInventory) => characterInventory.character
  )
  // @ts-ignore
  inventory: CharacterInventory[];
}
