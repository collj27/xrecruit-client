import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import {useEffect, useState} from "react";
import {ListGroup} from "react-bootstrap";
import '../app.css'
import {fetchSchoolById} from "../../services/schoolService";
import VideoPlayer from "../videoPlayer/videoPlayer";


function SchoolProfile() {
    const [school, setSchool] = useState(null);

    useEffect(() => {
        fetchSchoolById(1).then((data) => {
            console.log(data)

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
            <Row className="justify-content-center mt-5">
                <Col xl={3}>
                    <Card>
                        <Card.Img variant="top" src={school?.imgUrl}/>
                        <Card.Body>
                            <Card.Title>
                                <span>{school?.name}</span>
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Header><span>News</span></Card.Header>
                        <ListGroup variant="flush">
                            {school?.newsArticles?.map((x, index) =>
                                <ListGroup.Item>
                                    <Card.Link key={index} href={x["formattedUrl"]}>{x["title"]}</Card.Link>
                                </ListGroup.Item>
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