import React, {useEffect, useState} from "react";
import { isEmpty } from 'lodash';
import {ItemModel} from "../../../../api/src/model/items/itemModel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import fetchItemsDataHook from "../../hooks/api/fetchItemsDataHook";
import { Link } from 'react-router-dom';

interface ItemsState {
    items: ItemModel[]
}

type ItemsStateHook = [ItemsState, (data: any) => void];

function getItemRows(items: ItemModel[]) {
    return items.map(item => {
        return (
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.type}</td>
                <td>
                <Link to={`/items/${item.id}`}>{item.name}</Link>
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
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Type</th>
                    <th>Edit</th>
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
            <Row>
                <Col>
                    <h1>Items</h1>
                    {getItemTable(data.items)}
                </Col>
            </Row>
        </Container>
    )
}
