import { BasicItem } from "../BasicItem";
import { Entity, Column } from "typeorm";

@Entity()
export class HealthRecoveryItem extends BasicItem {
  @Column()
  size!: string;

  @Column()
  recoverFactor!: string;
}
