import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import {useEffect, useState} from "react";
import {ListGroup} from "react-bootstrap";
import '../app.css'
import {fetchSchoolById} from "../../services/schoolService";
import ReactPlayer from "react-player";


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
                {/*left half of page*/}
                <Col>
                    <Row>
                        <Col>
                            <Card>
                                {/*TODO: figure out proper image size}*/}
                                <Card.Img variant="top" src={school?.imgUrl}/>
                                <Card.Body>
                                    <Card.Title>
                                        <span>{school?.name}</span>
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="mt-5">
                            <Card>
                                <Card.Header>Featured</Card.Header>
                                <ListGroup variant="flush">
                                    {school?.newsArticles.map((x, index) =>
                                        <ListGroup.Item>
                                            <Card.Link key={index} href={x.formattedUrl}>{x.title}</Card.Link>
                                        </ListGroup.Item>
                                    )}
                                </ListGroup>
                            </Card>
                        </Col>
                    </Row>
                </Col>

                {/*right half of page*/}
                <Col>
                    <ReactPlayer url={school?.videoUrl}/>
                </Col>
            </Row>

        </Container>
    );
}

export default SchoolProfile;