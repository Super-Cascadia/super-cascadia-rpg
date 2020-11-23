import { Connection } from "typeorm";
import { Request } from "@hapi/hapi";
import { CharacterEquipment } from "../../db/entity/CharacterEquipment";
import { getCharacterEquipment } from "../../db/selectors/characterEquipment";
import { omit, omitBy, isNull, forEach, toString } from "lodash";
import { getCharacterInventoryById } from "../../db/selectors/characterInventory";
import { CharacterInventory } from "../../db/entity/CharacterInventory";
import { Character } from "../../db/entity/Character";

interface CharacterEquipmentExpanded {
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

async function getCharacterEquipmentDetails(
  connection: Connection,
  equipment: CharacterEquipment
) {
  const returnObject: CharacterEquipmentExpanded = {
    id: equipment.id,
    character: equipment.character,
    leftHand: null,
    rightHand: null,
    head: null,
    chest: null,
    arms: null,
    legs: null,
    feet: null,
  };
  const equipmentLocations = omit(equipment, ["id", "character"]);
  const equipmentLocationsWithItems = omitBy(equipmentLocations, isNull);

  let requests: Promise<any>[] = [];
  let requestedInventoryKeys: string[] = [];

  forEach(equipmentLocationsWithItems, (item, key) => {
    const request = getCharacterInventoryById(connection, toString(item.id));

    requestedInventoryKeys.push(key);
    requests.push(request);
  });

  return Promise.all<any>(requests).then((response) => {
    forEach(requestedInventoryKeys, (key, index) => {
      // @ts-ignore
      returnObject[key] = response[index];
    });

    return returnObject;
  });
}

export const getCharacterEquipmentHandler = async (
  connection: Connection,
  request: Request
): Promise<CharacterEquipment | string | undefined> => {
  try {
    const id = request.params.id;

    if (id) {
      const equipment = await getCharacterEquipment(connection, id);

      if (!equipment) {
        return "equipment not found";
      }

      return getCharacterEquipmentDetails(connection, equipment).then(
        (characterEquipment) => {
          return characterEquipment as CharacterEquipment;
        }
      );
    }
  } catch (e) {
    console.error("error", e);
    return Promise.resolve(e);
  }
};
