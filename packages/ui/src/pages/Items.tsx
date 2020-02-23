import React, {useEffect, useState} from "react";
import {ItemModel} from "../../../api/src/model/items/itemModel";

interface data {
    items: ItemModel[]
}

type useStateValues = [data, (data: any) => void];

function getItems(data: data) {
    if (!data.items) {
        return null;
    }

    return (<ul>
        {data.items.map(item => (
            <li key={item.id}>
                <a href={item.id.toString()}>{item.name}</a>
            </li>
        ))}
    </ul>);
}

export default function Items() {
    const [data, setData]: useStateValues = useState({ items: [] as ItemModel[] });

    // @ts-ignore
    useEffect( () => {
        async function fetchData() {
            const response = await fetch('/items');
            const items = await response.json();

            setData({
                items
            });
        }

        fetchData();
    }, []);

    return (
        <div>
            <h1>Items</h1>
            {getItems(data)}
        </div>
    )
}
