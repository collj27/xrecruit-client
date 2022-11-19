import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './playerProfile.css'
import PlayerStats from './playerStats/playerStats';
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ReactPlayer from "react-player";
import {useEffect, useState} from "react";
import {Button} from "react-bootstrap";
import '../app.css'
import {ArrowRight} from "react-bootstrap-icons";
import {fetchPlayerById} from "../../services/playerService";
import {calculateAge} from "../../utils/utils";
import '../archie.jpeg'

// auth

//TODO: create stats table
function PlayerProfile() {
    const [player, setPlayer] = useState(null);

    useEffect(() => {

        fetchPlayerById(1).then((data) => {
            setPlayer({
                    firstName: data.first_name,
                    lastName: data.last_name,
                    position: data.position,
                    height: data.height,
                    weight: data.weight,
                    age: calculateAge(data.birth_date),
                    highSchool: data.high_school,
                    description: data.description,
                    stats: data.player_stats,
                    videoUrl: "https://www.youtube.com/watch?v=JWVQF5_gkfk"
                }
            )
        })

    }, []);
    return (
        <Container fluid="md">
            <Row className="justify-content-center">
                <Col xl={3} className="mt-5">
                    <Card>
                        {/*TODO: figure out proper image size}*/}
                        <Card.Img variant="top" src="archie.jpeg"/>
                        <Card.Body>
                            <Card.Title>
                                <span>{player?.firstName} </span><span>{player?.lastName}</span>
                            </Card.Title>
                            <Row>
                                <Col><span className="playerPage-attribute-title">Position</span></Col>
                                <Col xs={7}><span>{player?.position}</span></Col>
                            </Row>
                            <Row>
                                <Col><span className="playerPage-attribute-title">HT/WT</span></Col>
                                <Col xs={7}><span>{player?.height} {player?.weight}</span></Col>
                            </Row>
                            <Row>
                                <Col><span className="playerPage-attribute-title">Age</span></Col>
                                <Col xs={7}><span>{player?.age}</span></Col>
                            </Row>
                            <Row>
                                <Col><span className="playerPage-attribute-title">High School</span></Col>
                                <Col xs={7}><span>{player?.highSchool}</span></Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="mt-5">
                    <Card>
                        <Card.Body>
                            <Card.Title><span>About</span></Card.Title>
                            <Card.Text>{player?.description}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={5} className="mt-5">
                    <Card>
                        <Card.Body>
                            <Card.Title><span>Stats</span></Card.Title>
                            <PlayerStats stats={player?.stats}></PlayerStats>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="justify-content-end mt-2">
                <Col className="playerPage-video-wrapper">
                    <ReactPlayer className="playerPage-video" url={player?.videoUrl} width="100%"/>
                </Col>
            </Row>
            <Row className="justify-content-end mt-2 mb-5">
                <Col className="playerPage-align-button-right" lg={5}>
                    <Button className="app-donate-button">
                        <span> Recruit {player?.firstName} <ArrowRight/></span>
                    </Button>
                </Col>
            </Row>
            {/*TODO: https://www.npmjs.com/package/react-player; look at imports depending on how videos are used (i.e. youtube onlu to reduce overhead*/}
        </Container>
    );
}

export default PlayerProfile;