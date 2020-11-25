import {
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import { CharacterInventory } from "./CharacterInventory";
import { Character } from "./Character";

@Entity()
export class CharacterEquipment {
  constructor() {}
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
