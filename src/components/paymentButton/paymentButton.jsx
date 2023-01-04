import {Button, Dropdown, DropdownButton, InputGroup, Modal, Offcanvas, Spinner} from "react-bootstrap";
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
            <Button className="payment-button" onClick={() => handleShow()}>
                {btnTitle}
            </Button>

            {/*<Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <InputGroup>
                        <InputGroup.Text>$</InputGroup.Text>
                        <Form.Control type="number" placeholder="Enter an amount"/>
                    </InputGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
*/}
            <Offcanvas show={show} onHide={handleClose} placement="bottom" scroll={true}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Select an Amount</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Row className="justify-content-center">
                        <Col className="text-center" lg={3}>
                            {['radio'].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                    <Form.Check
                                        inline
                                        label="$10"
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-1`}
                                    />
                                    <Form.Check
                                        inline
                                        label="$50"
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-2`}
                                    />
                                    <Form.Check
                                        inline
                                        label="$100"
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-3`}
                                    />
                                    <Form.Check
                                        inline
                                        label="$250"
                                        type={type}
                                        name="group1"
                                        id={`inline-${type}-4`}
                                    />
                                </div>
                            ))}
                            {/* <InputGroup>
                                <InputGroup.Text>$</InputGroup.Text>
                                <Form.Control type="text" placeholder="Other Amount"/>
                                <InputGroup.Text>.00</InputGroup.Text>
                            </InputGroup>*/}
                        </Col>
                    </Row>

                    <Row className="mb-3 justify-content-center">
                        <Col className="text-center"  lg={3}>
                            <InputGroup>
                                <InputGroup.Text>$</InputGroup.Text>
                                <Form.Control type="text" placeholder="Other Amount"/>
                                <InputGroup.Text>.00</InputGroup.Text>
                            </InputGroup>
                        </Col>
                    </Row>

                    <Row className="justify-content-center">
                        <Col className="text-center" sm={3}>
                            <Button>Submit Payment</Button>
                        </Col>
                    </Row>

                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default PaymentButton;