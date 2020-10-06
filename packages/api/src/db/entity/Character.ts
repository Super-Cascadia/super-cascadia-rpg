import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { CharacterClassId } from "../../model/characterClass/characterClassModel";
import { CharacterAttributes } from "./CharacterAttributes";

@Entity()
export class Character {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  firstName!: string;

  @Column()
  lastName!: string;

  @Column()
  description!: string;

  @Column()
  primaryClass!: CharacterClassId;

  @OneToOne(
    (type) => CharacterAttributes,
    (characterAttributes) => characterAttributes.character
  )
  // @ts-ignore
  characterAttributes: CharacterAttributes;
}
