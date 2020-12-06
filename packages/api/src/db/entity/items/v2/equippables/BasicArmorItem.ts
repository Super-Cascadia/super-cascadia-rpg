import { Column, Entity, ManyToOne } from "typeorm";
import { ArmorType } from "../../../../../model/items/itemModel";
import { BasicEquippableItem } from "./BasicEquippableItem";
import { IconAsset } from "../../../assets/icons/IconAsset";

@Entity()
export abstract class BasicArmorItem extends BasicEquippableItem {
  @Column()
  armorStrength!: number;

  @Column()
  armorLocation!: ArmorType;

  @ManyToOne(() => IconAsset, (iconAsset) => iconAsset.armorItems, {
    nullable: true,
  })
  // @ts-ignore
  iconAsset: IconAsset;
}
