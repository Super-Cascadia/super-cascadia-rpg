import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { ItemType } from "./interfaces/items";
import { CharacterInventory } from "./CharacterInventory";

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  description!: string;

  @Column()
  type!: ItemType;

  @OneToMany(
    () => CharacterInventory,
    (characterInventory) => characterInventory.item
  )
  // @ts-ignore
  characterInventory: CharacterInventory[];
}
