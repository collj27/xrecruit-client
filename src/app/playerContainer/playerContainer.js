import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PlayerCard from "../playerCard/playerCard";
import Container from 'react-bootstrap/Container';
import './playerContainer.css'

function PlayerContainer() {

    return (
        <Container>
            <Row className="add-space">
                <Col>
                    <PlayerCard></PlayerCard>
                </Col>
                <Col>
                    <PlayerCard></PlayerCard>
                </Col>
                <Col>
                    <PlayerCard></PlayerCard>
                </Col>
                <Col>
                    <PlayerCard></PlayerCard>
                </Col>
            </Row>
            <Row className="add-space">
                <Col>
                    <PlayerCard></PlayerCard>
                </Col>
                <Col>
                    <PlayerCard></PlayerCard>
                </Col>
                <Col>
                    <PlayerCard></PlayerCard>
                </Col>
                <Col>
                    <PlayerCard></PlayerCard>
                </Col>
            </Row>
            <Row className="add-space">
                <Col>
                    <PlayerCard></PlayerCard>
                </Col>
                <Col>
                    <PlayerCard></PlayerCard>
                </Col>
                <Col>
                    <PlayerCard></PlayerCard>
                </Col>
                <Col>
                    <PlayerCard></PlayerCard>
                </Col>
            </Row>
        </Container>
    );

}

export default PlayerContainer;
