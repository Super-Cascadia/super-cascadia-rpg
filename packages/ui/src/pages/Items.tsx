import React, {useEffect, useState} from "react";
import {ItemModel} from "../../../api/src/model/items/itemModel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";

interface data {
    items: ItemModel[]
}

type useStateValues = [data, (data: any) => void];

function getItemRows(items: ItemModel[]) {
    return items.map(item => {
        return (
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.type}</td>
            </tr>
        )
    });
}

function getItemTable(items: ItemModel[]) {
    if (!items) {
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
                </tr>
            </thead>
            <tbody>
            {getItemRows(items)}
            </tbody>
        </Table>
    );
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
