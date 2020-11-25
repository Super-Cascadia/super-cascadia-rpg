import { Request, ResponseToolkit, Server } from "@hapi/hapi";
import { Connection } from "typeorm";
import { getCharactersHandler } from "../../handlers/characters/getCharactersHandler";
import createCharacterHandler from "../../handlers/characters/createCharacterHandler";
import updateCharacterHandler from "../../handlers/characters/updateCharacterHandler";
import duplicateCharacterHandler from "../../handlers/characters/duplicateCharacterHandler";
import { deleteCharacterHandler } from "../../handlers/characters/deleteCharacterHandler";
import createCharacterAttributesHandler from "../../handlers/characterAttributes/createCharacterAttributesHandler";
import { getAttributesForCharacterHandler } from "../../handlers/characters/getAttributesForCharacterHandler";
import { createCharacterInventoryHandler } from "../../handlers/characterInventory/createCharacterInventoryHandler";
import { getCharacterInventoryHandler } from "../../handlers/characterInventory/getCharacterInventoryHandler";
import { deleteCharacterInventoryHandler } from "../../handlers/characterInventory/deleteCharacterInventoryHandler";
import { createCharacterEquipmentHandler } from "../../handlers/characterEquipment/createCharacterEquipmentHandler";
import { getCharacterEquipmentHandler } from "../../handlers/characterEquipment/getCharacterEquipmentHandler";
import { updateCharacterEquipmentHandler } from "../../handlers/characterEquipment/updateCharacterEquipmentHandler";

function getCharacters(server: Server, connection: Connection) {
  server.route({
    method: "GET",
    path: "/characters/{id?}",
    handler: (request: Request, reply: ResponseToolkit) => {
      return getCharactersHandler(connection, request, reply);
    },
  });
}

function createCharacter(server: Server, connection: Connection) {
  server.route({
    method: "POST",
    path: "/characters",
    handler: async (request: Request, reply: ResponseToolkit) =>
      createCharacterHandler(connection, request, reply),
  });
}

function updateCharacter(server: Server, connection: Connection) {
  server.route({
    method: "PUT",
    path: "/characters/{id}",
    handler: async (request: Request, reply: ResponseToolkit) =>
      updateCharacterHandler(connection, request, reply),
  });
}

function deleteCharacter(server: Server, connection: Connection) {
  server.route({
    method: "DELETE",
    path: "/characters/{id}",
    handler: async (request: Request, reply: ResponseToolkit): Promise<{}> =>
      deleteCharacterHandler(connection, request, reply),
  });
}

function duplicateCharacter(server: Server, connection: Connection) {
  server.route({
    method: "POST",
    path: "/characters/{id}/duplicate",
    handler: async (request: Request, reply: ResponseToolkit) =>
      duplicateCharacterHandler(connection, request, reply),
  });
}

// Attributes

function createCharacterAttributes(server: Server, connection: Connection) {
  server.route({
    method: "POST",
    path: "/characters/{id}/attributes",
    handler: async (request: Request, reply: ResponseToolkit) =>
      createCharacterAttributesHandler(connection, request),
  });
}

function getCharacterAttributes(server: Server, connection: Connection) {
  server.route({
    method: "GET",
    path: "/characters/{id}/attributes",
    handler: async (request: Request, reply: ResponseToolkit) =>
      getAttributesForCharacterHandler(connection, request),
  });
}

// Inventory

function createCharacterInventory(server: Server, connection: Connection) {
  server.route({
    method: "POST",
    path: "/characters/{id}/inventory",
    handler: async (request: Request, reply: ResponseToolkit) =>
      createCharacterInventoryHandler(connection, request),
  });
}

function getCharacterInventory(server: Server, connection: Connection) {
  server.route({
    method: "GET",
    path: "/characters/{id}/inventory",
    handler: async (request: Request, reply: ResponseToolkit) =>
      getCharacterInventoryHandler(connection, request),
  });
}

function deleteCharacterInventory(server: Server, connection: Connection) {
  server.route({
    method: "DELETE",
    path: "/characterInventory/{id}",
    handler: async (request: Request, reply: ResponseToolkit) =>
      deleteCharacterInventoryHandler(connection, request),
  });
}

// Equipment

function createCharacterEquipment(server: Server, connection: Connection) {
  server.route({
    method: "POST",
    path: "/characters/{id}/equipment",
    handler: async (request: Request, reply: ResponseToolkit) =>
      createCharacterEquipmentHandler(connection, request),
  });
}

function updateCharacterEquipment(server: Server, connection: Connection) {
  server.route({
    method: "PUT",
    path: "/characters/{id}/equipment",
    handler: async (request: Request, reply: ResponseToolkit) =>
      updateCharacterEquipmentHandler(connection, request),
  });
}

function getCharacterEquipment(server: Server, connection: Connection) {
  server.route({
    method: "GET",
    path: "/characters/{id}/equipment",
    handler: async (request: Request, reply: ResponseToolkit) =>
      getCharacterEquipmentHandler(connection, request),
  });
}

export const characterRoutes = (server: Server, connection: Connection) => {
  // Primary Object
  getCharacters(server, connection);
  createCharacter(server, connection);
  updateCharacter(server, connection);
  duplicateCharacter(server, connection);
  deleteCharacter(server, connection);
  // Attributes
  createCharacterAttributes(server, connection);
  getCharacterAttributes(server, connection);
  //  Inventory
  createCharacterInventory(server, connection);
  getCharacterInventory(server, connection);
  deleteCharacterInventory(server, connection);
  //  Equipment
  createCharacterEquipment(server, connection);
  getCharacterEquipment(server, connection);
  updateCharacterEquipment(server, connection);
};
