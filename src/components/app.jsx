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
import PlayerProfile from "./playerProfile/playerProfile";

// Import Parse minified version
import Parse from 'parse/dist/parse.min.js';

// Your Parse initialization configuration goes here
const PARSE_APPLICATION_ID = 'Hcu0HuBLfJoXCzdDz02Ajlq8j3jm25cKsIVcJIDf';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
const PARSE_JAVASCRIPT_KEY = 'CgSlBlsq2UH52BtPas7m7MC0wm9Fzw08cJCHlrnY';
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;

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
                    <Route exact path='/' element={<PlayerProfile/>}></Route>
                </Routes>

            </Router>
        );
    }
}



export default App;
