import {Button, Dropdown, DropdownButton, InputGroup, Modal, Spinner} from "react-bootstrap";
import {redirectToCheckout} from "../../services/paymentService";
import {useState} from "react";
import "./paymentButton.css"
import Form from 'react-bootstrap/Form';

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
            <DropdownButton className="payment-button" disabled={isDisabled}
                            title={btnTitle}>
                <Dropdown.ItemText>Select an amount</Dropdown.ItemText>
                <Dropdown.Divider/>
                <Dropdown.Item as="button" onClick={() => handleClick(props?.btnName, 10)}>$10</Dropdown.Item>
                <Dropdown.Item as="button" onClick={() => handleClick(props?.btnName, 20)}>$20</Dropdown.Item>
                <Dropdown.Item as="button" onClick={() => handleClick(props?.btnName, 50)}>$50</Dropdown.Item>
                <Dropdown.Item as="button" onClick={() => handleClick(props?.btnName, 100)}>$100</Dropdown.Item>
                <Dropdown.Item as="button" onClick={() => handleClick(props?.btnName, 100)}>$100</Dropdown.Item>
                <Dropdown.Item as="button" onClick={() => handleShow()}>Custom Amount</Dropdown.Item>


            </DropdownButton>

            <Modal show={show} onHide={handleClose}>
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
        </>
    );
}

export default PaymentButton;