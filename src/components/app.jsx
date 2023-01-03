import './app.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Component} from "react";
import PlayerProfile from "./playerProfile/playerProfile";
import SchoolProfile from "./schoolProfile/schoolProfile";
import PaymentConfirmation from "./paymentConfirmation/paymentConfirmation";
import {LinkContainer} from 'react-router-bootstrap'


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
                                <LinkContainer to="/">
                                    <Nav.Link>Home</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/">
                                    <Nav.Link>Players</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/schools">
                                    <Nav.Link>Schools</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/">
                                    <Nav.Link>Donate</Nav.Link>
                                </LinkContainer>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Routes>
                    <Route exact path='/' element={<PlayerProfile/>}></Route>
                    <Route exact path='/schools' element={<SchoolProfile/>}></Route>
                    <Route exact path='/paymentConfirmation' element={<PaymentConfirmation/>}></Route>
                </Routes>

            </Router>
        );
    }
}



export default App;
