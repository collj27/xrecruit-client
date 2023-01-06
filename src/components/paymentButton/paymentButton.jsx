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

    const [radioValue, setRadioValue] = useState('1');

    const [value, setValue] = useState(50);
    const handleChange = (val) => {
        console.log(val)
        if (val === value)
            setValue(null)
        else
            setValue(val)
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

    const handleClick = async (name, dollarAmount) => {
        // disable submit for 5 secs to prevent dup clicks
        setIsDisabled(true)
        setTimeout(() => setIsDisabled(false), 5000);

        // redirect to stripe
        await redirectToCheckout(name, dollarAmount)
    };

    return (
        <>
            {/*            <DropdownButton className="payment-button" disabled={isDisabled} title={btnTitle}>
                <Dropdown.ItemText>Select an amount</Dropdown.ItemText>
                <Dropdown.Divider/>
                <Dropdown.Item as="button" onClick={() => handleClick(props?.btnName, 10)}>$10</Dropdown.Item>
                <Dropdown.Item as="button" onClick={() => handleClick(props?.btnName, 20)}>$20</Dropdown.Item>
                <Dropdown.Item as="button" onClick={() => handleClick(props?.btnName, 50)}>$50</Dropdown.Item>
                <Dropdown.Item as="button" onClick={() => handleClick(props?.btnName, 100)}>$100</Dropdown.Item>
                <Dropdown.Item as="button" onClick={() => handleClick(props?.btnName, 100)}>$100</Dropdown.Item>
                <Dropdown.Item as="button" onClick={() => handleShow()}>Custom Amount</Dropdown.Item>
            </DropdownButton>*/}
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
                            <Form>
                                <Form.Group as={Row} className="mb-3">
                                    <ToggleButtonGroup type="radio" name="radio" size="lg" value={value} onChange={handleChange}>
                                        {radios.map((radio, idx) => (
                                            <ToggleButton className="toggle-button"
                                                          key={idx}
                                                          id={`radio-${idx}`}
                                                          value={radio.value}
                                                          name="group1"
                                            >
                                                {radio.name}
                                            </ToggleButton>
                                        ))}
                                    </ToggleButtonGroup>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3">
                                    <InputGroup>
                                        <InputGroup.Text>$</InputGroup.Text>
                                        <Form.Control type="text" size="lg" placeholder="Other Amount"/>
                                        <InputGroup.Text>.00</InputGroup.Text>
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3">
                                    <ButtonGroup>
                                        <Button variant="secondary" size="lg" type="submit">
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