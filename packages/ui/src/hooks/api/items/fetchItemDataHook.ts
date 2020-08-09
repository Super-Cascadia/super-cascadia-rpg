export default function getEffect(id: number, setData: (data: any) => void) {
    return () => {
        async function fetchData(id: number) {
            const response = await fetch(`/items/${id}`);
            const item = await response.json();

            setData({
                item
            });
        }

        fetchData(id);
    };
}
