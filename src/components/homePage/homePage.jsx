import {Form} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import './homePage.css'
import PlayerCard from "../playerCard/playerCard";

function HomePage() {

    return (
        <Container>
            <Row className="mt-5">
                <Col>
                    <h1>Help bring the best players to your favorite team.</h1>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col sm={6}>
                    <Form>
                        <Form.Control
                            className="search-bar"
                            type="search"
                            placeholder="Search for players, schools"
                        />
                    </Form>
                </Col>
            </Row>

            <Row className="mt-3">
                <Col>
                    <PlayerCard>

                    </PlayerCard>
                </Col>
            </Row>


        </Container>

    );
}

export default HomePage