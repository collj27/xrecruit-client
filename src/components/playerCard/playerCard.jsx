import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Stack} from "react-bootstrap";
import "./playerCard.css"

function PlayerCard(props) {
    return (

                <Card>
                    <Card.Body>
                        <Row>
                            <Col>
                                <Card.Img src={props.imgUrl} height="173px"/>
                            </Col>
                            <Col sm={4} className="text-end">
                                <Stack>
                                    <span className="playerCard-number-position">#8</span>
                                    <span className="playerCard-number-position">{props.position}</span>
                                </Stack>
                            </Col>
                        </Row>
                        <Row>
                            <Stack>
                                <span className="playerCard-name">{props.firstName + " " + props.lastName}</span>
                                <span className="playerCard-funds">$350k Raised</span>
                                <span className="playerCard-funds">203 Donors</span>
                            </Stack>
                        </Row>
                    </Card.Body>
                </Card>



    );
}

export default PlayerCard;