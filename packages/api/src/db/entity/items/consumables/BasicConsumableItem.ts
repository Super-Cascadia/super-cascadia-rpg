import { BasicItem } from "../BasicItem";
import { Column, Entity } from "typeorm";

@Entity()
export class BasicConsumableItem extends BasicItem {
  @Column()
  consumable!: boolean;

  @Column({
    nullable: true,
  })
  recoversHealth!: boolean;

  @Column({
    nullable: true,
  })
  healthRecoveryFactor!: string;

  @Column({
    nullable: true,
  })
  recoversMana!: boolean;

  @Column({
    nullable: true,
  })
  manaRecoveryFactor!: string;

  @Column({
    nullable: true,
  })
  recoversStamina!: boolean;

  @Column({
    nullable: true,
  })
  staminaRecoveryFactor!: string;
}
