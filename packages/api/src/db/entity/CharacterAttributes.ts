import {
  Entity,
  Column,
  OneToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Character } from "./Character";

@Entity()
export class CharacterAttributes {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  strength!: number;

  @Column()
  dexterity!: number;

  @Column()
  vitality!: number;

  @Column()
  intelligence!: number;

  @Column()
  mind!: number;

  @Column()
  piety!: number;

  @OneToOne((type) => Character)
  @JoinColumn()
  // @ts-ignore
  character: Character;
}
