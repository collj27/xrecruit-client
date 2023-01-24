import {Card, Form} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import './homePage.css'
import PlayerCard from "../playerCard/playerCard";
import {useEffect, useState} from "react";
import {fetchPlayers} from "../../services/playerService";

function HomePage() {

    const [playerList, setPlayerList] = useState(null);
    useEffect(() => {
        fetchPlayers().then((data) => {
            setPlayerList(data)
        })

    }, []);

    return (
        <Container>
            <Row className="mt-5">
                <Col>
                    <h1 className="homePage-title">Help bring the best players to your favorite team.</h1>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col sm={6}>
                    <Form>
                        <Form.Control
                            className="search-bar"
                            type="search"
                            placeholder="Search for players, schools"
                        />
                    </Form>
                </Col>
            </Row>
            <Row className="my-3">
                <Card>
                    <Card.Body>
                        <Row xs={2} sm={2} md={3} lg={4} className="my-3">
                            {playerList?.map((player, idx) => (
                                <Col key={idx}>
                                    <PlayerCard firstName={player["first_name"]} lastName={player["last_name"]}
                                                imgUrl={player["image_url"]} position={player["position"]}></PlayerCard>
                                </Col>
                            ))}
                        </Row>

                        <Row md={4} className="my-3">
                            {playerList?.map((player, idx) => (
                                <Col key={idx}>
                                    <PlayerCard firstName={player["first_name"]} lastName={player["last_name"]}
                                                imgUrl={player["image_url"]} position={player["position"]}></PlayerCard>
                                </Col>
                            ))}
                        </Row>

                    </Card.Body>
                </Card>
            </Row>
        </Container>

    );
}

export default HomePage