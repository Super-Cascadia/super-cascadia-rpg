import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  OneToMany,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import { CharacterClassId } from "../../model/characterClass/characterClassModel";
import { CharacterAttributes } from "./CharacterAttributes";
import { CharacterInventory } from "./CharacterInventory";
import { Character } from "./Character";
import { Item } from "./Item";

@Entity()
export class CharacterEquipment {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => CharacterInventory, (inventory) => inventory.item, {
    eager: true,
  })
  // @ts-ignore
  leftHand: CharacterInventory;

  @ManyToOne(() => CharacterInventory, (inventory) => inventory.item)
  // @ts-ignore
  rightHand: CharacterInventory;

  @ManyToOne(() => CharacterInventory, (inventory) => inventory.item)
  // @ts-ignore
  head: CharacterInventory;

  @ManyToOne(() => CharacterInventory, (inventory) => inventory.item)
  // @ts-ignore
  chest: CharacterInventory;

  @ManyToOne(() => CharacterInventory, (inventory) => inventory.item)
  // @ts-ignore
  arms: CharacterInventory;

  @ManyToOne(() => CharacterInventory, (inventory) => inventory.item)
  // @ts-ignore
  legs: CharacterInventory;

  @ManyToOne(() => CharacterInventory, (inventory) => inventory.item)
  // @ts-ignore
  feet: CharacterInventory;

  @OneToOne((type) => Character)
  @JoinColumn()
  // @ts-ignore
  character: Character;
}
