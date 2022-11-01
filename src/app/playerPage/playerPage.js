import archie_manning from "../../images/archie_manning.jpeg";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './playerPage.css'
import PlayerStats from '../playerStats/playerStats';
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ReactPlayer from "react-player";
import {useEffect, useState} from "react";
import {Button} from "react-bootstrap";
import '../app.css'
import {ArrowRight} from "react-bootstrap-icons";
import Parse from 'parse/dist/parse.min.js';


function PlayerPage(props) {
    const [player, setPlayer] = useState(null);
    async function fetchPlayer() {
        const query = new Parse.Query('Player');
        query.equalTo('firstName', 'Archie');

        // run the query
        const data = await query.first();

        return data
    }

    useEffect(() => {
        fetchPlayer().then(async (data) => {
             setPlayer(data);
        })
    }, []);
    return (
        <Container fluid="md">
          <Row className="justify-content-center">
                <Col xl={3}  className="mt-5">
                    <Card>
                        {/*TODO: figure out proper image size}*/}
                        <Card.Img variant="top" src={archie_manning} fluid={"true"}/>
                        <Card.Body>
                            <Card.Title>
                                <span>{player?.get('firstName')} </span>
                                <span>{player?.get('lastName')}</span>
                            </Card.Title>
                            <Card.Text>
                                <Row>
                                    <Col><span className="playerPage-attribute-title">HT/WT</span></Col>
                                    <Col><span>5'10" 226 lbs</span></Col>
                                </Row>
                                <Row>
                                    <Col><span className="playerPage-attribute-title">Age</span></Col>
                                    <Col><span>23</span></Col>
                                </Row>
                                <Row>
                                    <Col><span className="playerPage-attribute-title">High School</span></Col>
                                    <Col><span>Ohio High</span></Col>
                                </Row>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} className="mt-5">
                    <Card>
                        <Card.Body>
                            <Card.Title><span>About</span></Card.Title>
                            <Card.Text>{player?.get('description')}</Card.Text>
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
                            <ReactPlayer className="playerPage-video"
                                         url='https://www.youtube.com/watch?v=JWVQF5_gkfk'/>
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

export default PlayerPage;