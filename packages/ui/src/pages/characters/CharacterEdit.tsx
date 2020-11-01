import React, { useEffect, useState, SyntheticEvent } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";
import { toNumber, isEmpty } from "lodash";
import { toString } from "lodash";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { LinkContainer } from "react-router-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Loading from "../../components/Loading";
import fetchCharacterDataHook from "../../hooks/api/characters/fetchCharacterDataHook";
import {Character} from "@super-cascadia-rpg/api";
import updateCharacter from "../../api/characters/updateCharacter";
import {getCharacterTypeById} from "../../util/characterClass";

export default function CharacterEdit() {
    const { id: characterId } = useParams<{ id: string }>();
    const id = toNumber(characterId);
    const [data, setData] = useState({ character: {} as Character });
    const { character } = data;

    const handleFormChange = (event: SyntheticEvent) => {
        const { id, value } = event?.target as HTMLInputElement;

        const newState = {
            ...data,
            character: {
                ...data.character,
                [id]: id === "primaryClass" ? parseInt(value, 10) : value,
            },
        };

        setData(newState);
    };

    const handleSubmit = (event: SyntheticEvent) => {
        const form = event?.target as HTMLInputElement;

        console.log(form);

        event.preventDefault();
        event.stopPropagation();

        updateCharacter(data.character).then(() => {
            setData(data);
            fetchCharacterDataHook(id, setData);
        });
    };

    // @ts-ignore
    useEffect(fetchCharacterDataHook(id, setData), {});

    console.log(data);

    if (isEmpty(character)) {
        return <Loading />;
    }

    const classTypeName = getCharacterTypeById(character.primaryClass);

    return (
        <Container>
            <br />
            <Breadcrumb>
                <Breadcrumb.Item href="/characters">Characters</Breadcrumb.Item>
                <Breadcrumb.Item active>{id}</Breadcrumb.Item>
                <Breadcrumb.Item>Edit</Breadcrumb.Item>
            </Breadcrumb>
            <Card>
                <Form onSubmit={handleSubmit}>
                    <Card.Header>
                        <h1>{`${character.firstName} ${character.lastName}`}</h1>
                    </Card.Header>
                    <Card.Body>
                        <Form.Group as={Row} controlId="formId">
                            <Form.Label column sm="2">
                                ID
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control readOnly as="input" value={toString(character.id)} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="firstName">
                            <Form.Label column sm="2">
                                First Name
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control
                                    as="input"
                                    value={character.firstName}
                                    onChange={(e: SyntheticEvent) => handleFormChange(e)}
                                />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="lastName">
                            <Form.Label column sm="2">
                                Last Name
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control
                                    as="input"
                                    value={character.lastName}
                                    onChange={(e: SyntheticEvent) => handleFormChange(e)}
                                />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="description">
                            <Form.Label column sm="2">
                                Description
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control
                                    as="input"
                                    value={character.description}
                                    onChange={(e: SyntheticEvent) => handleFormChange(e)}
                                />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="primaryClass" onChange={(e: SyntheticEvent) => handleFormChange(e)}>
                            <Form.Label column sm="2">
                                Primary Class
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control as="select" value={toString(character.primaryClass)}>>
                                    <option value={0}>Freelancer</option>
                                    <option value={1}>Rogue</option>
                                    <option value={2}>Warrior</option>
                                    <option value={3}>Mage</option>
                                    <option value={4}>Druid</option>
                                    <option value={5}>Sorcerer</option>
                                </Form.Control>
                            </Col>
                        </Form.Group>

                    </Card.Body>
                    <Card.Footer className="text-muted">
                        <Container>
                            <Row>
                                <Col sm="1">
                                    <Button variant="primary" type="submit" size="sm">
                                        Submit
                                    </Button>
                                </Col>
                                <Col sm="10" />
                                <Col sm="1">
                                    <LinkContainer to={`/characters/${character.id}/view`}>
                                        <Button variant="secondary" type="submit" size="sm">
                                            Cancel
                                        </Button>
                                    </LinkContainer>
                                </Col>
                            </Row>
                        </Container>
                    </Card.Footer>
                </Form>
            </Card>
        </Container>
    );
}
