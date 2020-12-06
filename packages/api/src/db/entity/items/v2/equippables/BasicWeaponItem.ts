import { Column, Entity, ManyToOne } from "typeorm";
import { BasicEquippableItem } from "./BasicEquippableItem";
import { WeaponType } from "../../../../../model/items/itemModel";
import { IconAsset } from "../../../assets/icons/IconAsset";

@Entity()
export abstract class BasicWeaponItem extends BasicEquippableItem {
  @Column()
  weaponStrength!: number;

  @Column()
  weaponType!: WeaponType;

  @Column()
  twoHanded!: boolean;

  @ManyToOne(() => IconAsset, (iconAsset) => iconAsset.weaponItems, {
    nullable: true,
  })
  // @ts-ignore
  iconAsset: IconAsset;
}
