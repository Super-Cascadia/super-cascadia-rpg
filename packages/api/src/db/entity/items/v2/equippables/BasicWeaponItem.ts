import { Column, Entity } from "typeorm";
import { BasicEquippableItem } from "./BasicEquippableItem";
import { WeaponType } from "../../../../../model/items/itemModel";

@Entity()
export abstract class BasicWeaponItem extends BasicEquippableItem {
  @Column()
  weaponStrength!: number;

  @Column()
  weaponType!: WeaponType;

  @Column()
  twoHanded!: boolean;
}
