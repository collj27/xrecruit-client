import archie_manning from "../../images/archie_manning.jpeg";
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
import {fetchPlayerByObjectId} from "../../services/playerService";
import {calculateAge} from "../../utils/utils";


// video
// auth

function PlayerProfile() {
    const [player, setPlayer] = useState(null);

    /*TODO: prevent from being called twice*/
    useEffect(() => {
        fetchPlayerByObjectId("t7sAyTpiPM")
            .then((data) => {
                setPlayer({
                    profilePicUrl: data.get("profilePic")._url,
                    firstName: data.get('firstName'),
                    lastName: data.get('lastName'),
                    height:  data.get('height'),
                    weight: data.get('weight'),
                    age: calculateAge(data.get('dateOfBirth')),
                    highSchool:  data.get('highSchool'),
                    description:  data.get('description'),
                    videoUrl: data.get('videoUrl')
                });
            })
    }, []);
    return (
        <Container fluid="md">
            <Row className="justify-content-center">
                <Col xl={3} className="mt-5">
                    <Card>
                        {/*TODO: figure out proper image size}*/}
                        <Card.Img variant="top" src={player?.profilePicUrl} fluid={"true"}/>
                        <Card.Body>
                            <Card.Title>
                                <span>{player?.firstName}</span>
                                <span>{player?.lastName}</span>
                            </Card.Title>
                            <Card.Text>
                                <Row>
                                    <Col><span className="playerPage-attribute-title">HT/WT</span></Col>
                                    <Col><span>{player?.height} {player?.weight}</span></Col>
                                </Row>
                                <Row>
                                    <Col><span className="playerPage-attribute-title">Age</span></Col>
                                    <Col><span>{player?.age}</span></Col>
                                </Row>
                                <Row>
                                    <Col><span className="playerPage-attribute-title">High School</span></Col>
                                    <Col><span>{player?.highSchool}</span></Col>
                                </Row>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} className="mt-5">
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
                            <Card.Text><PlayerStats></PlayerStats></Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="mb-5">
                <Col xl={4} className="mt-5">
                    <Card>
                        <Card.Body>
                            <Card.Title><span>Funding</span></Card.Title>
                            <Card.Text></Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="mt-5">
                    <Row>
                        <Col className="align-items-end">
                            <ReactPlayer className="playerPage-video" url={player?.videoUrl}/>
                        </Col>
                    </Row>
                    <Row className="mt-2 justify-content-end">
                        <Col lg={2}>
                            <Button className="app-donate-button">
                                <Row>
                                    <Col xs={7}>Donate</Col>
                                    <Col className="mx-2" xs={1}><ArrowRight/></Col>
                                </Row>
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
            {/*TODO: https://www.npmjs.com/package/react-player; look at imports depending on how videos are used (i.e. youtube onlu to reduce overhead*/}
        </Container>
    );
}

export default PlayerProfile;