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
import {fetchPlayerByObjectId, fetchStatsByPlayerId} from "../../services/playerService";
import {calculateAge} from "../../utils/utils";


// auth

//TODO: create stats table
function PlayerProfile() {
    const [player, setPlayer] = useState(null);
    const [playerStats, setPlayerStats] = useState(null);

    useEffect(() => {


        fetchPlayerByObjectId("t7sAyTpiPM")
            .then((playerParseObj) => {

                // set player
                setPlayer({
                    profilePicUrl: playerParseObj.get("profilePic")._url,
                    firstName: playerParseObj.get('firstName'),
                    lastName: playerParseObj.get('lastName'),
                    position: playerParseObj.get('position'),
                    height: playerParseObj.get('height'),
                    weight: playerParseObj.get('weight'),
                    age: calculateAge(playerParseObj.get('dateOfBirth')),
                    highSchool: playerParseObj.get('highSchool'),
                    description: playerParseObj.get('description'),
                    videoUrl: playerParseObj.get('videoUrl'),
                    statsTableName: playerParseObj.get('statsTableName')
                });


                //fetch player stats
                fetchStatsByPlayerId(playerParseObj).then(statsParseObj => {
                    setPlayerStats(statsParseObj)
                })
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
                            <Row>
                                <Col><span className="playerPage-attribute-title">Position</span></Col>
                                <Col><span>{player?.position}</span></Col>
                            </Row>
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
                {/*<Col xl={5} className="mt-5">
                    <Card>
                        <Card.Body>
                            <Card.Title><span>Stats</span></Card.Title>
                            <PlayerStats stats={playerStats} tableName={player?.statsTableName}></PlayerStats>
                        </Card.Body>
                    </Card>
                </Col>*/}
            </Row>
            <Row className="mb-5">
                {/*<Col xl={4} className="mt-5">
                    <Card>
                        <Card.Body>
                            <Card.Title><span>Funding</span></Card.Title>
                        </Card.Body>
                    </Card>
                </Col>*/}
                <Col xl={5} className="mt-5">
                    <Card>
                        <Card.Body>
                            <Card.Title><span>Stats</span></Card.Title>
                            <PlayerStats stats={playerStats} tableName={player?.statsTableName}></PlayerStats>
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
                                    <Col xs={7}>Recruit {player.firstName}</Col>
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