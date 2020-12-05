import { Column } from "typeorm";
import { BasicItem } from "../BasicItem";

export abstract class BasicEquippableItem extends BasicItem {
  @Column()
  equippable!: boolean;

  @Column()
  breakable!: boolean;

  @Column()
  baseDurability!: number;

  @Column()
  currentDurability!: number;
}
