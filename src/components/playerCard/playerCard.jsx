import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Button, Image, Stack} from "react-bootstrap";
import "./playerCard.css"
import {PlusLg} from "react-bootstrap-icons";
import {createSearchParams, useNavigate} from "react-router-dom";


function PlayerCard(props) {

    const navigate = useNavigate();
    const openPlayerProfile = () => {

        navigate("/playerProfile?" + createSearchParams({
                // query params in url
                playerId: props.playerId,
                firstName: props.firstName,
                lastName: props.lastName,
                position: props.position,

            }
        ).toString(),
            {
                state: {
                    imgUrl: props.imgUrl,
                    description: props.description,
                    height: props.height,
                    weight: props.weight,
                    birthDate: props.birthDate,
                    highSchool: props.highSchool
                }
            }
        )


    }

    return (
        <Card className="playerCard">
            <Card.Body>
                <Row>
                    <Col className="playerCard-image-container">
                        <Image className="playerCard-image" src={props.imgUrl}/>
                    </Col>
                    <Col xs={4} className="text-end">
                        <Stack>
                            <span className="playerCard-number-position">#8</span>
                            <span className="playerCard-number-position">{props.position}</span>
                        </Stack>
                    </Col>
                </Row>
                <Row >
                    <Col>
                        <Stack>
                            <span className="playerCard-name">{props.firstName + " " + props.lastName}</span>
                            <span className="playerCard-funds">$350k Raised</span>
                              {/*<span className="playerCard-funds">203 Donors</span>*/}
                            <Row className="align-items-start">
                                <Col>
                                    <span className="playerCard-funds">203 Donors</span>
                                </Col>
                                <Col xs={3} sm={4} className="text-end">
                                    <Button className="btn btn-secondary"
                                            onClick={openPlayerProfile}><PlusLg></PlusLg></Button>
                                </Col>
                            </Row>
                        </Stack>
                    </Col>
                    {/*<Col xs={3} sm={3}>
                        <Button className="btn btn-secondary"
                                onClick={openPlayerProfile}><PlusLg></PlusLg></Button>
                    </Col>*/}


                </Row>
            </Card.Body>
        </Card>


    );
}

export default PlayerCard;