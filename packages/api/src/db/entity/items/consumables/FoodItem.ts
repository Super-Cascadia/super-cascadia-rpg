import { BasicItem } from "../BasicItem";
import { Entity, Column } from "typeorm";

@Entity()
export class FoodItem extends BasicItem {
  @Column()
  size!: string;

  @Column()
  recoverFactor!: string;
}
