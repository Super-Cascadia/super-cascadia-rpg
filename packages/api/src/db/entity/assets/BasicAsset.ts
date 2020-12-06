import { PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { BasicWeaponItem } from "../items/v2/equippables/BasicWeaponItem";
import { BasicArmorItem } from "../items/v2/equippables/BasicArmorItem";
import { BasicConsumableItem } from "../items/v2/consumables/BasicConsumableItem";

export abstract class BasicAsset {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  description!: string;

  @OneToMany(() => BasicWeaponItem, (item) => item.iconAsset)
  // @ts-ignore
  weaponItems: BasicWeaponItem[];

  @OneToMany(() => BasicArmorItem, (item) => item.iconAsset)
  // @ts-ignore
  armorItems: BasicArmorItem[];

  @OneToMany(() => BasicConsumableItem, (item) => item.iconAsset)
  // @ts-ignore
  consumableItems: BasicConsumableItem[];
}
