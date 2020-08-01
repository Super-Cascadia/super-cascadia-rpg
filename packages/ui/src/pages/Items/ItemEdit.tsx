import React, {useEffect, useState} from "react";
import {ItemModel} from "../../../../api/src/model/items/itemModel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useParams } from 'react-router-dom';
import fetchItemDataHook from '../../hooks/api/fetchItemDataHook';
import { getItemTypeNameById } from '../../util/itemType';

interface ItemEditState {
    item: ItemModel
}

type ItemsStateHook = [ItemEditState, (data: any) => void];


export default function ItemEdit() {
    const { id } = useParams();
    const [data, setData]: ItemsStateHook = useState({ item: {} as ItemModel });
    const { item } = data;
    const itemTypeName = getItemTypeNameById(item?.type);

    // @ts-ignore
    useEffect(fetchItemDataHook(id, setData), {});

    return (
        <Container>
            <br/>
            <Card>
                <Card.Header>{item.name}</Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Group as={Row} controlId="formId">
                            <Form.Label column sm="2">
                                ID
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control plaintext readOnly defaultValue={item.id} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formName">
                            <Form.Label column sm="2">
                                Name
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control plaintext readOnly defaultValue={item.name} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formDescription">
                            <Form.Label column sm="2">
                            Description
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control plaintext readOnly placeholder={item.description} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formType">
                            <Form.Label column sm="2">
                            Type
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control plaintext readOnly placeholder={itemTypeName} />
                            </Col>
                        </Form.Group>
                    </Form>
                    <Card.Footer className="text-muted">
                        <Button variant="primary" size="sm">
                            Edit Item        
                        </Button>
                    </Card.Footer>
                </Card.Body>
            </Card>
            
        </Container>
    )
}
