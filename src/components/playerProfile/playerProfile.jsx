import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './playerProfile.css'
import PlayerStats from './playerStats/playerStats';
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import {useEffect, useState} from "react";
import '../app.css'
import {fetchPlayerById} from "../../services/playerService";
import {calculateAge} from "../../utils/utils";
import VideoPlayer from "../videoPlayer/videoPlayer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";
import ReactStars from "react-rating-stars-component/dist/react-stars";
import PaymentButton from "../paymentButton/paymentButton";
import {useSearchParams} from "react-router-dom";


function PlayerProfile() {

    //player data
    const [player, setPlayer] = useState(null);

    const [searchParams] = useSearchParams();

    useEffect(() => {

        setPlayer({
                    firstName:searchParams.get("firstName"),
                    lastName: searchParams.get("lastName"),
                    position: searchParams.get("postion"),
                    height: searchParams.get("height"),
                    weight: searchParams.get("weight"),
                    age: calculateAge(searchParams.get("birthDate")),
                    highSchool: searchParams.get("highSchool"),
                    description: searchParams.get("description"),
                    stats: searchParams.get("stats"),
                    imgUrl: searchParams.get("imgUrl"), //TODO: figure out how to mask img url and youtube url - base64 encode? cache? store in browser?
                    videoUrl: "https://www.youtube.com/watch?v=JWVQF5_gkfk"
                })

/*        fetchPlayerById(searchParams.get("playerId")).then((data) => {
            setPlayer({
                    firstName: data["first_name"],
                    lastName: data["last_name"],
                    position: data["position"],
                    height: data["height"],
                    weight: data["weight"],
                    age: calculateAge(data["birth_date"]),
                    highSchool: data["high_school"],
                    description: data["description"],
                    stats: data["player_stats"],
                    imgUrl: data["image_url"],
                    videoUrl: "https://www.youtube.com/watch?v=JWVQF5_gkfk"
                }
            )
        })*/

    }, []);
    return (
        <Container fluid="md">
            <Row className="justify-content-center mt-5">
                <Col xl={3}>
                    <Card>
                        {/*TODO: figure out proper image size}*/}
                        <Card.Img variant="top" src={player?.imgUrl}/>
                        <Card.Body>
                            <Card.Title>
                                <span>{player?.firstName} </span><span>{player?.lastName}</span>
                            </Card.Title>

                            <ReactStars count={5} size={24} value={5} edit={false} activeColor="#FBFBFB"/>

                            <Row>
                                <Col><span className="playerProfile-attribute-title">Position</span></Col>
                                <Col xs={7}><span>{player?.position}</span></Col>
                            </Row>
                            <Row>
                                <Col><span className="playerProfile-attribute-title">HT/WT</span></Col>
                                <Col xs={7}><span>{player?.height} {player?.weight}</span></Col>
                            </Row>
                            <Row>
                                <Col><span className="playerProfile-attribute-title">Age</span></Col>
                                <Col xs={7}><span>{player?.age}</span></Col>
                            </Row>
                            <Row>
                                <Col><span className="playerProfile-attribute-title">High School</span></Col>
                                <Col xs={7}><span>{player?.highSchool}</span></Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>
                                <span className="underlined-title">About</span>
                                <FontAwesomeIcon  pull="right" icon={faInstagram}/>
                                <FontAwesomeIcon className="twitter" pull="right" icon={faTwitter}/>
                            </Card.Title>
                            <Card.Text>{player?.description}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={5}>
                    <Card>
                        <Card.Body>
                            <Card.Title><span className="underlined-title">Stats</span></Card.Title>
                            <PlayerStats stats={player?.stats}></PlayerStats>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="justify-content-end mt-2">
                <Col>
                    <VideoPlayer url={player?.videoUrl}></VideoPlayer>
                </Col>
            </Row>
            <Row className="justify-content-end mt-2 mb-5">
                <Col className="text-end" lg={5}>
                    <PaymentButton btnPrefix="Recruit" btnName={player?.firstName}></PaymentButton>
                </Col>
            </Row>
            {/*TODO: https://www.npmjs.com/package/react-player; look at imports depending on how videos are used (i.e. youtube onlu to reduce overhead*/}
        </Container>
    );
}

export default PlayerProfile;