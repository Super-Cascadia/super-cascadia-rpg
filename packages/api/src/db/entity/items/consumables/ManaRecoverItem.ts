import { Entity, Column } from "typeorm";
import { BasicConsumableItem } from "./BasicConsumableItem";

@Entity()
export class ManaRecoveryItem extends BasicConsumableItem {
  @Column()
  recoverFactor!: string;
}
