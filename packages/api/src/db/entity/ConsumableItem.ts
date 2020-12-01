import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ItemType } from "./constants";
import { Item } from "./Item";
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

  @Column()
  recoverHealth!: boolean;

  @Column()
  recoverFactor!: string;
}
