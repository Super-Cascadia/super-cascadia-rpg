import { Connection, InsertResult } from "typeorm";
import { BasicArmorItem } from "../../../entity/items/equippables/BasicArmorItem";
import { BasicWeaponItem } from "../../../entity/items/equippables/BasicWeaponItem";

// Armor Items

export async function findArmorItems(connection: Connection) {
  return connection.manager.find(BasicArmorItem);
}

export async function createNewArmorItem(
  connection: Connection,
  item: BasicArmorItem
): Promise<InsertResult> {
  return connection.manager.insert(BasicArmorItem, item);
}

// Weapon Items

export async function findWeaponItems(connection: Connection) {
  return connection.manager.find(BasicWeaponItem);
}

export async function createNewWeaponItem(
  connection: Connection,
  item: BasicWeaponItem
): Promise<InsertResult> {
  return connection.manager.insert(BasicWeaponItem, item);
}
