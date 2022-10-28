import './app.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import {Component} from "react";
import Schools from "./schools/schools";
import PlayerPage from "./playerPage/playerPage";
import PlayerContainer from "./playerContainer/playerContainer";


class App extends Component {
    render() {
        return (
            <Router>
                <Navbar expand="md" variant="dark">
                    <Container>
                        <Navbar.Brand href="/"><span>XRECRUIT</span></Navbar.Brand>
                        <Navbar.Toggle variant="light"/>
                        <Navbar.Collapse>
                            <Nav>
                                <Nav.Link href="/"><span>Home</span></Nav.Link>
                                <Nav.Link href="/"><span>Players</span></Nav.Link>
                                <Nav.Link href="/schools"><span>Schools</span></Nav.Link>
                                <Nav.Link href="/"><span>Donate</span></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Routes>
                    {/*<Route exact path='/' element={<PlayerContainer/>}></Route>*/}
                    <Route exact path='/' element={<PlayerPage/>}></Route>
                    <Route exact path='/schools' element={<Schools/>}></Route>
                </Routes>

            </Router>
        );
    }
}

/*<Navbar bg="light" expand="lg">
    <Container>
        <Navbar.Brand href="#home">Brand Name/Logo</Navbar.Brand>
        <Navbar.Collapse>
            <Nav>
                <Nav.Link href="#home">Players</Nav.Link>
                <Nav.Link href="#link">Schools</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Container>
</Navbar>*/


/*<Container>
    <Row>
        <header class="title">
            <h1>Top Players</h1>
        </header>
    </Row>
    <Row>
        {Array.from({length: 4}).map((_, idx) => (
            <Col>
                <PlayerCard></PlayerCard>
            </Col>
        ))}
    </Row>
</Container>
 */

//}

export default App;
