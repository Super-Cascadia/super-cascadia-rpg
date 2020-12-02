import { Entity, Column } from "typeorm";
import { BasicConsumableItem } from "./BasicConsumableItem";

@Entity()
export class HealthRecoveryItem extends BasicConsumableItem {
  @Column()
  recoverFactor!: string;
}
