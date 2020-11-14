import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { Character } from "./Character";
import { Item } from "./Item";

@Entity()
export class CharacterInventory {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Character, (character) => character.items)
  // @ts-ignore
  character: Character;
}
