import { PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

export abstract class BasicAsset {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  description!: string;
}
