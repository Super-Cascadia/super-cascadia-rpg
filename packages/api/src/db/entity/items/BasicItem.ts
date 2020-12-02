import { PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { ItemType } from "../constants";
import { CharacterInventory } from "../CharacterInventory";

export abstract class BasicItem {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  description!: string;

  @Column()
  icon!: string;

  @Column()
  type!: ItemType;

  @OneToMany(
    () => CharacterInventory,
    (characterInventory) => characterInventory.item
  )
  // @ts-ignore
  characterInventory: CharacterInventory[];
}
