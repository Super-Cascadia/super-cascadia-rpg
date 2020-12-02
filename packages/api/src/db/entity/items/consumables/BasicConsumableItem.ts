import { BasicItem } from "../BasicItem";
import { Column } from "typeorm";

export abstract class BasicConsumableItem extends BasicItem {
  @Column()
  consumable!: boolean;
}
