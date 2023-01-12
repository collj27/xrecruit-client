import Card from "react-bootstrap/Card";
import ReactStars from "react-rating-stars-component";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Image} from "react-bootstrap";
import headshot from "../../headshot.png"
import {useEffect, useState} from "react";
import {fetchPlayers} from "../../services/playerService";
import {calculateAge} from "../../utils/utils";

function PlayerCard() {

        //TODO: make this a list
    //player data
    const [player, setPlayer] = useState(null);
    useEffect(() => {

        fetchPlayers().then((data) => {
          setPlayer({
                    firstName: data["first_name"],
                    lastName: data["last_name"],
                    position: data["position"],
                    height: data["height"],
                    weight: data["weight"],
                   // age: calculateAge(data["birth_date"]),
                    highSchool: data["high_school"],
                    description: data["description"],
                    stats: data["player_stats"],
                    imgUrl: data["image_url"],
                    videoUrl: "https://www.youtube.com/watch?v=JWVQF5_gkfk"
                }
            )
        })

    }, []);

    return (

        <Row>
            <Col sm={2}>
                <Card>
                     <Card.Img variant="top" src={player?.imgUrl}/>
                    <Card.Body>

                        <Card.Title>
                            <Row>
                                <Col>
                                    <Image src={player?.imgUrl}/>
                                </Col>
                                <Col sm={6}>
                                    <Row>
                                        <Col>
                                            #8
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            RB
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <span>Kasim Hill</span>
                                </Col>
                            </Row>

                        </Card.Title>
                        <Row>
                            <Col><span>$350k Raised</span></Col>
                        </Row>
                        <Row>
                            <Col><span>203 Donors</span></Col>
                        </Row>
                    </Card.Body>
                </Card>

            </Col>
        </Row>


    );
}

export default PlayerCard;