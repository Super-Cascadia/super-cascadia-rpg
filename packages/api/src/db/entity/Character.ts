import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { CharacterClassId } from "../../model/characterClass/characterClassModel";

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
}
