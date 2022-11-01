import archie_manning from '../../images/archie_manning.jpeg';
import './playerCard.css'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import StarRating from 'react-svg-star-rating' //]
import PlayerProfile from "../playerProfile/playerProfile";
import {useState} from "react";


function PlayerCard() {

    const [showPlayerInfo, setShowPlayerInfo] = useState(false);

    const openPlayerInfo = () => {
        setShowPlayerInfo(true);
    }

    const closePlayerInfo = () => {
        setShowPlayerInfo(false);
    }


    return (
        <Container>
            <Row>
                <Col>
                    <Card className="card" onClick={openPlayerInfo}>
                        <Card.Img src={archie_manning}/>
                        <Card.ImgOverlay className="overlay">
                            <Card.Title className="player-name">Archie Manning Jr.</Card.Title>
                            {/*`<Card.Text>
                                //<StarRating initialRating={5}></StarRating>
                            </Card.Text>*/}
                        </Card.ImgOverlay>
                    </Card>
                </Col>
            </Row>
            <PlayerProfile showInfo={showPlayerInfo} closePlayerInfo={closePlayerInfo}/>
        </Container>
    );
}

export default PlayerCard;
