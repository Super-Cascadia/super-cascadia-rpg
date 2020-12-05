import { Connection, InsertResult } from "typeorm/index";
import { Request, ResponseToolkit } from "@hapi/hapi";
import { ConsumableItem } from "../../db/entity/characters/ConsumableItem";
import { createNewConsumableItem } from "../../db/selectors/consumableItem";

const createConsumableItemHandler = async (
  connection: Connection,
  request: Request,
  reply: ResponseToolkit
): Promise<InsertResult> => {
  try {
    return createNewConsumableItem(
      connection,
      request.payload as ConsumableItem
    )
      .then((e) => {
        console.log(e);
        return e;
      })
      .catch((e) => {
        console.log(e);
        return e;
      });
  } catch (e) {
    return Promise.resolve(e);
  }
};

export default createConsumableItemHandler;
