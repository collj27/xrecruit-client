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
                        <Row className="my-3">
                            {playerList?.map((player, idx) => (
                                <Col key={idx} xs={12} sm={12} md={6} lg={6} xl={3} className="my-3">
                                    <PlayerCard
                                        playerId={player["player_id"]}
                                        firstName={player["first_name"]}
                                        lastName={player["last_name"]}
                                        imgUrl={player["image_url"]}
                                        position={player["position"]}
                                        height={player["height"]}
                                        weight={player["weight"]}
                                        description={player["description"]}
                                        stats={player["stats"]}
                                        birthDate={player["birth_date"]}
                                        highSchool={player["high_school"]}
                                        videoUrl={player["video_url"]}
                                    ></PlayerCard>
                                </Col>
                            ))}
                        </Row>

                        <Row className="my-3">
                            {playerList?.map((player, idx) => (
                                <Col key={idx} xs={12} sm={12} md={6} lg={6} xl={3} className="my-3">
                                    <PlayerCard
                                        playerId={player["player_id"]}
                                        firstName={player["first_name"]}
                                        lastName={player["last_name"]}
                                        imgUrl={player["image_url"]}
                                        position={player["position"]}
                                        height={player["height"]}
                                        weight={player["weight"]}
                                        description={player["description"]}
                                        stats={player["stats"]}
                                        birthDate={player["birth_date"]}
                                        highSchool={player["high_school"]}
                                        videoUrl={player["video_url"]}
                                    ></PlayerCard>
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