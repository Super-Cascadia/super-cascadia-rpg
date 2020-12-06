import { getIconAssets } from "../../../api/assets/icons/getIconAssets";

export default function getEffect(setData: (data: any) => void) {
  return () => {
    async function fetchIconAssetData() {
      const iconAssets = await getIconAssets();

      setData(iconAssets);
    }

    fetchIconAssetData();
  };
}
