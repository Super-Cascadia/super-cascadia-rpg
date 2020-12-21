import { Connection, InsertResult } from "typeorm";
import { BasicArmorItem } from "../../../entity/items/v2/equippables/BasicArmorItem";
import { BasicWeaponItem } from "../../../entity/items/v2/equippables/BasicWeaponItem";
import { BasicConsumableItem } from "../../../entity/items/v2/consumables/BasicConsumableItem";
import { UpdateResult } from "typeorm/browser";

// Armor ItemsPage

export async function findArmorItems(connection: Connection) {
  return connection.manager.find(BasicArmorItem);
}

export async function createNewArmorItem(
  connection: Connection,
  item: BasicArmorItem
): Promise<InsertResult> {
  return connection.manager.insert(BasicArmorItem, item);
}

// Weapon ItemsPage

export async function findWeaponItems(connection: Connection) {
  return connection.manager.find(BasicWeaponItem, { relations: ["iconAsset"] });
}

export async function createNewWeaponItem(
  connection: Connection,
  item: BasicWeaponItem
): Promise<InsertResult> {
  return connection.manager.insert(BasicWeaponItem, item);
}

export async function updateWeaponItem(
  connection: Connection,
  id: string,
  item: BasicWeaponItem
): Promise<UpdateResult> {
  return connection.manager.update(BasicWeaponItem, id, item);
}

// Consumable ItemsPage

export async function findConsumableItems(connection: Connection) {
  return connection.manager.find(BasicConsumableItem);
}

export async function createNewConsumableItem(
  connection: Connection,
  item: BasicConsumableItem
): Promise<InsertResult> {
  return connection.manager.insert(BasicConsumableItem, item);
}
