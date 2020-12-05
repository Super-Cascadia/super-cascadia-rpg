import { Column, Entity } from "typeorm";
import { ArmorType } from "../../../../../model/items/itemModel";
import { BasicEquippableItem } from "./BasicEquippableItem";

@Entity()
export abstract class BasicArmorItem extends BasicEquippableItem {
  @Column()
  armorStrength!: number;

  @Column()
  armorLocation!: ArmorType;
}
