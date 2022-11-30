import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ReactPlayer from "react-player";
import {useEffect, useState} from "react";
import {Button, ListGroup} from "react-bootstrap";
import '../app.css'
import {ArrowRight} from "react-bootstrap-icons";
import {fetchPlayerById} from "../../services/playerService";
import {calculateAge, positionDict} from "../../utils/utils";
import {fetchSchoolById} from "../../services/schoolService";

// auth

//TODO: create stats table
function SchoolProfile() {
    const [school, setSchool] = useState(null);

    useEffect(() => {

        fetchSchoolById(1).then((data) => {

            console.log(data)
            setSchool({
                    name: data.name,
                    newsArticles: data.news,
                    imgUrl: data.school_img_url,
                    videoUrl: "https://www.youtube.com/watch?v=JWVQF5_gkfk"
                }
            )
        })

    }, []);
    return (
        <Container fluid="md">
            <Row className="justify-content-center">
                <Col xl={3} className="mt-5">
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
            <Row className="justify-content-center">
                <Col xl={3} className="mt-5">
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
        </Container>
    );
}

export default SchoolProfile;