import {
    Button,
    ButtonGroup,
    Dropdown,
    DropdownButton,
    InputGroup,
    Modal,
    Offcanvas,
    Spinner,
    ToggleButton, ToggleButtonGroup
} from "react-bootstrap";
import {redirectToCheckout} from "../../services/paymentService";
import {useState} from "react";
import "./paymentButton.css"
import Form from 'react-bootstrap/Form';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//TODO: use session object to verify destination before redirecting to stripeCheckout
function PaymentButton(props) {

    //toggle recruit button
    const [isDisabled, setIsDisabled] = useState(false);

    const [show, setShow] = useState(false);

    const [paymentValue, setPaymentValue] = useState(50);


    const [isToggleDisabled, setIsToggleDisabled] = useState(false);
    const [toggleValue, setToggleValue] = useState(50);

    const handleToggleChange = (val) => {
        setToggleValue(val)
        setPaymentValue(val)
    };


    const handleCustomValueChange = (e) => {
        let input = e.target.value
        if (input === "") {
            // if custom amount field is empty, enable toggle buttons
            setIsToggleDisabled(false)
            setPaymentValue(null)
        } else {
            // if custom amount field is populated, disable toggle buttons
            setToggleValue(null)
            setIsToggleDisabled(true)
            setPaymentValue(parseInt(input))
        }
    };


    const radios = [
        {name: '$10', value: 10},
        {name: '$50', value: 50},
        {name: '$100', value: 100},
        {name: '$250', value: 250},
    ];


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // make button title a spinner if still loading
    const spinner = <Spinner animation="border"/>
    const btnTitle = props?.btnName === undefined ? spinner : props.btnPrefix + " " + props.btnName


    const handleSubmit = async (e) => {
        e.preventDefault();
        await redirectToCheckout(props?.btnName, paymentValue)
    };

    return (
        <>
            <Button variant="secondary" size="lg" onClick={() => handleShow()}>
                {btnTitle}
            </Button>

            <Offcanvas show={show} onHide={handleClose} placement="bottom" scroll={true}>
                <Offcanvas.Header closeVariant="white" closeButton>
                    <Offcanvas.Title></Offcanvas.Title>
                </Offcanvas.Header>

                <Offcanvas.Body>
                    <Row className="justify-content-center">
                        <Col xs={8} sm={7} md={6} lg={5} xl={4}>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group as={Row} className="mb-3">
                                    <ToggleButtonGroup type="radio" name="radio" size="lg" value={toggleValue}
                                                       onChange={handleToggleChange}>
                                        {radios.map((radio, idx) => (
                                            <ToggleButton className="toggle-button"
                                                          key={idx}
                                                          id={`radio-${idx}`}
                                                          value={radio.value}
                                                          name="group1"
                                                          disabled={isToggleDisabled}
                                            >
                                                {radio.name}
                                            </ToggleButton>
                                        ))}
                                    </ToggleButtonGroup>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="otherAmount">
                                    <InputGroup>
                                        <InputGroup.Text size="lg">$</InputGroup.Text>
                                        <Form.Control type="text" size="lg" placeholder="Other Amount"
                                                      onChange={handleCustomValueChange}/>
                                        <InputGroup.Text size="lg">.00</InputGroup.Text>
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3">
                                    <ButtonGroup>
                                        <Button variant="secondary" size="lg" type="submit" disabled={paymentValue === null}>
                                            Submit Payment
                                        </Button>
                                    </ButtonGroup>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default PaymentButton;