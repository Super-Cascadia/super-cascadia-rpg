import {
  getAllArmorItems,
  getAllConsumableItems,
  getAllWeaponItems,
} from "../../../../api/items/v2";

export function fetchAllConsumableItemsHook(setData: (data: any) => void) {
  return () => {
    async function fetchData() {
      const items = await getAllConsumableItems();

      setData(items);
    }

    fetchData();
  };
}

export function fetchAllWeaponItemsHook(setData: (data: any) => void) {
  return () => {
    async function fetchData() {
      const items = await getAllWeaponItems();

      setData(items);
    }

    fetchData();
  };
}

export function fetchAllArmorItemsHook(setData: (data: any) => void) {
  return () => {
    async function fetchData() {
      const items = await getAllArmorItems();

      setData(items);
    }

    fetchData();
  };
}
