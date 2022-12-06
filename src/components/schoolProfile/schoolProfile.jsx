import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import {useEffect, useState} from "react";
import {ListGroup} from "react-bootstrap";
import '../app.css'
import {fetchSchoolById} from "../../services/schoolService";
import VideoPlayer from "../videoPlayer/videoPlayer";
import {faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


function SchoolProfile() {
    const [school, setSchool] = useState(null);

    useEffect(() => {
         fetchSchoolById(1).then((data) => {
             setSchool({
                    name: data.name,
                    newsArticles: data["news_articles"],
                    imgUrl: data["image_url"],
                    videoUrl: "https://www.youtube.com/watch?v=2P6kKQPbsRE"
                }
            )
        })

    }, []);
    return (
        <Container fluid="md">
            <Row className="mt-5">
                <Col xl={3}>
                    <Card>
                        <Card.Img variant="top" src={school?.imgUrl}/>
                        <Card.Body>
                            <Card.Title className="profile-title">
                                <span>{school?.name}</span>
                            </Card.Title>
                            <Row>
                                <Col><FontAwesomeIcon className="twitter" pull="right" size="lg" icon={faTwitter}/></Col>
                                <Col><FontAwesomeIcon pull="left" size="lg" icon={faInstagram} /></Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Header><span className="underlined-title">News</span></Card.Header>
                        <ListGroup variant="flush">
                            {school?.newsArticles?.map((x, index) =>
                                <ListGroup.Item key={index} href={x["formattedUrl"]}>{x["title"]}</ListGroup.Item>
                            )}
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
            <Row className="mt-2">
                <Col>
                   <VideoPlayer url={school?.videoUrl}></VideoPlayer>
                </Col>
            </Row>

        </Container>
    );
}

export default SchoolProfile;