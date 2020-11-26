import { Connection } from "typeorm";
import { CharacterEquipment } from "../../../db/entity/CharacterEquipment";
import { forEach, isNull, omit, omitBy, toString } from "lodash";
import { getCharacterInventoryById } from "../../../db/selectors/characterInventory";
import { Character } from "../../../db/entity/Character";
import { CharacterInventory } from "../../../db/entity/CharacterInventory";

export interface CharacterEquipmentExpanded {
  id: number;
  character: Character;
  leftHand: CharacterInventory | null;
  rightHand: CharacterInventory | null;
  head: CharacterInventory | null;
  chest: CharacterInventory | null;
  arms: CharacterInventory | null;
  legs: CharacterInventory | null;
  feet: CharacterInventory | null;
}

export async function getCharacterEquipmentDetails(
  connection: Connection,
  equipment: CharacterEquipment
) {
  const returnObject: CharacterEquipmentExpanded = {
    ...equipment,
  };
  const equipmentLocations = omit(equipment, ["id", "character"]);
  const equipmentLocationsWithItems = omitBy(equipmentLocations, isNull);

  let requests: Promise<any>[] = [];
  let requestedInventoryKeys: string[] = [];

  forEach(equipmentLocationsWithItems, (item, key) => {
    let inventoryId = toString(item?.id);

    if (inventoryId) {
      const request = getCharacterInventoryById(connection, inventoryId);

      requestedInventoryKeys.push(key);
      requests.push(request);
    }
  });

  return Promise.all<any>(requests).then((response) => {
    forEach(requestedInventoryKeys, (key, index) => {
      // @ts-ignore
      returnObject[key] = response[index];
    });

    return returnObject;
  });
}
