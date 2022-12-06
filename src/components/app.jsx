import './app.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Component} from "react";
import PlayerProfile from "./playerProfile/playerProfile";
import SchoolProfile from "./schoolProfile/schoolProfile";
import PaymentConfirmation from "./paymentConfirmation/paymentConfirmation";



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
                    <Route exact path='/schools' element={<SchoolProfile/>}></Route>
                    <Route exact path='/paymentConfirmation' element={<PaymentConfirmation/>}></Route>
                </Routes>

            </Router>
        );
    }
}



export default App;
