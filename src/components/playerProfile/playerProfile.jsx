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
import {fetchPlayerById, fetchPlayerByObjectId, fetchStatsByPlayerId} from "../../services/playerService";
import {calculateAge} from "../../utils/utils";


// auth

//TODO: create stats table
function PlayerProfile() {
    const [player, setPlayer] = useState(null);
    const [playerStats, setPlayerStats] = useState(null);

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
                    description: data.description
                }
            )
        })


        /*fetchPlayerByObjectId("t7sAyTpiPM")
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
            })*/


    }, []);
    return (
        <Container fluid="md">
            <Row className="justify-content-center">
                <Col xl={3} className="mt-5">
                    <Card>
                        {/*TODO: figure out proper image size}*/}
                        <Card.Img variant="top" src={player?.profilePicUrl}/>
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
                            <PlayerStats stats={playerStats} tableName={player?.statsTableName}></PlayerStats>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="justify-content-end mt-2">
                {/*<Col xl={4} className="mt-5">
                    <Card>
                        <Card.Body>
                            <Card.Title><span>Funding</span></Card.Title>
                            <Card.Body><span>Not Enough Data</span></Card.Body>
                        </Card.Body>
                    </Card>
                </Col>*/}
                {/*<Col className="mt-5">
                    <Row className="mt-2 ms-8">
                        <Col className="playerPage-video-wrapper">
                            <ReactPlayer className="playerPage-video" url={player?.videoUrl} width="100%"/>
                        </Col>
                    </Row >
                    <Row className="mt-2 justify-content-end">
                        <Col className="playerPage-align-button-right" lg={5} >
                            <Button className="app-donate-button">
                               <span> Recruit {player?.firstName} <ArrowRight/></span>
                            </Button>
                        </Col>
                    </Row>
                </Col>*/}
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