import React, {useEffect, useState} from "react";
import { isEmpty } from 'lodash';
import {ItemModel} from "../../../../api/src/model/items/itemModel";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import fetchItemsDataHook from "../../hooks/api/fetchItemsDataHook";
import { Link } from 'react-router-dom';
import { getItemTypeNameById } from '../../util/itemType';

interface ItemsState {
    items: ItemModel[]
}

type ItemsStateHook = [ItemsState, (data: any) => void];

function getItemRows(items: ItemModel[]) {
    return items.map(item => {
        const itemTypeName = getItemTypeNameById(item?.type);

        return (
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{itemTypeName}</td>
                <td>
                <Link to={`/items/${item.id}`}>
                    <Button size="sm" variant="primary">Edit</Button>   
                </Link>
                <Link to={`/items/${item.id}`}>
                    <Button size="sm" variant="secondary">Copy</Button> 
                </Link>
                <Link to={`/items/${item.id}`}>
                    <Button size="sm" variant="danger">Delete</Button> 
                </Link>
                </td>
            </tr>
        )
    });
}

function getItemTable(items: ItemModel[]) {
    if (isEmpty(items)) {
        return null;
    }

    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Type</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            {getItemRows(items)}
            </tbody>
        </Table>
    );
}



export default function ItemGrid() {
    const [data, setData]: ItemsStateHook = useState({ items: [] as ItemModel[] });

    // @ts-ignore
    useEffect(fetchItemsDataHook(setData), []);

    return (
        <Container>
            <br/>
            <Card>
                <Card.Header>
                    <h1>Items</h1>
                    <Link to={`/items/create`}>
                        <Button variant="primary" size="sm">
                            Create Item        
                        </Button>
                    </Link> 
                </Card.Header>
                <Card.Body>
                    {getItemTable(data.items)}
                </Card.Body>
                <Card.Footer className="text-muted">{data.items.length} items</Card.Footer>
                </Card>
        </Container>
    )
}
