import { PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { CharacterInventory } from "../../characters/CharacterInventory";

export abstract class BasicItem {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  description!: string;

  @Column()
  salvagable!: boolean;

  @Column()
  baseMonetaryValue!: number;

  @OneToMany(
    () => CharacterInventory,
    (characterInventory) => characterInventory.item
  )
  // @ts-ignore
  characterInventory: CharacterInventory[];
}
