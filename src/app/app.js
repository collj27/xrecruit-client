import './app.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Parse from 'parse/dist/parse.min.js';
import {Component} from "react";
import Schools from "./schools/schools";
import PlayerPage from "./playerPage/playerPage";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import PlayerContainer from "./playerContainer/playerContainer";
import {PersonComponent} from "./PersonComponent";

const PARSE_APPLICATION_ID = '40QKLduDVPUFjwjyVKfmfnYEMpF9RxnHbun4xNM2';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
const PARSE_JAVASCRIPT_KEY = 'Bdg3rp5ooY677kNSwPbILQUo34Vj4VmLrLxs5S3h';
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;


class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <PersonComponent />
                </header>
            </div>
        );
        {/*<Router>
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
                    <Route exact path='/' element={<PlayerPage/>}></Route>
                    <Route exact path='/schools' element={<Schools/>}></Route>
                </Routes>

            </Router>*/}

    }
}



export default App;
