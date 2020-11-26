import {
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
  Column,
} from "typeorm";
import { CharacterInventory } from "./CharacterInventory";
import { Character } from "./Character";

@Entity()
export class CharacterEquipment {
  constructor() {}
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => CharacterInventory, (inventory) => inventory.item, {
    nullable: true,
  })
  // @ts-ignore
  leftHand: CharacterInventory | null;

  @ManyToOne(() => CharacterInventory, (inventory) => inventory.item, {
    nullable: true,
  })
  // @ts-ignore
  rightHand: CharacterInventory | null;

  @ManyToOne(() => CharacterInventory, (inventory) => inventory.item, {
    nullable: true,
  })
  // @ts-ignore
  head: CharacterInventory | null;

  @ManyToOne(() => CharacterInventory, (inventory) => inventory.item, {
    nullable: true,
  })
  // @ts-ignore
  chest: CharacterInventory | null;

  @ManyToOne(() => CharacterInventory, (inventory) => inventory.item, {
    nullable: true,
  })
  // @ts-ignore
  arms: CharacterInventory | null;

  @ManyToOne(() => CharacterInventory, (inventory) => inventory.item, {
    nullable: true,
  })
  // @ts-ignore
  legs: CharacterInventory | null;

  @ManyToOne(() => CharacterInventory, (inventory) => inventory.item, {
    nullable: true,
  })
  // @ts-ignore
  feet: CharacterInventory | null;

  @OneToOne((type) => Character, {
    nullable: false,
  })
  @JoinColumn()
  // @ts-ignore
  character: Character;
}
