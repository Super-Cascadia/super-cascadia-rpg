import { Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Character } from "./Character";
import { Item } from "./Item";

@Entity()
export class CharacterInventory {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Character, (character) => character.inventory)
  // @ts-ignore
  character: Character;

  @ManyToOne(() => Item, (item) => item.characterInventory)
  // @ts-ignore
  item: Item;
}
