export default function getEffect(setData: (data: any) => void) {
    return () => {
        async function fetchData() {
            const response = await fetch('/items');
            const items = await response.json();

            setData({
                items
            });
        }

        fetchData();
    };
}
