import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ItemType } from "../items/v1/constants";
import { Item } from "../items/v1/Item";
import { CharacterInventory } from "./CharacterInventory";

@Entity()
export class ConsumableItem extends Item {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  description!: string;

  @Column()
  icon!: string;

  @Column()
  type!: ItemType.FOOD;

  @OneToMany(
    () => CharacterInventory,
    (characterInventory) => characterInventory.item
  )
  // @ts-ignore
  characterInventory: CharacterInventory[];
}
