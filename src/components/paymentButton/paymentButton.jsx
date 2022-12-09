import {ArrowRight} from "react-bootstrap-icons";
import {Button, Dropdown, DropdownButton} from "react-bootstrap";
import {redirectToCheckout} from "../../services/paymentService";
import {useState} from "react";
import "./paymentButton.css"

//TODO: use session object to verify destination before redirecting to stripeCheckout
function PaymentButton(props) {

    //toggle recruit button
    const [isDisabled, setIsDisabled] = useState(false);

    const handleClick = async (name, dollarAmount) => {
        // disable submit for 5 secs to prevent dup clicks
        setIsDisabled(true)
        setTimeout(() => setIsDisabled(false), 5000);

        // redirect to stripe
        await redirectToCheckout(name, dollarAmount)
    };


    return (
        /* <Button className="payment-button" onClick={handleClick} disabled={isDisabled}>
                <span> {props?.btnPrefix} {props?.btnName} <ArrowRight/></span>
          </Button>*/
        <DropdownButton className="payment-button" disabled={isDisabled} title={props?.btnPrefix + " " + props?.btnName}>
            <Dropdown.ItemText>Select an amount</Dropdown.ItemText>
            <Dropdown.Divider />
            <Dropdown.Item as="button" onClick={() => handleClick(props?.btnName,10)}>$10</Dropdown.Item>
            <Dropdown.Item as="button" onClick={() => handleClick(props?.btnName, 20)}>$20</Dropdown.Item>
            <Dropdown.Item as="button" onClick={() => handleClick(props?.btnName, 50)}>$50</Dropdown.Item>
            <Dropdown.Item as="button" onClick={() => handleClick(props?.btnName, 100)}>$100</Dropdown.Item>
        </DropdownButton>
    );
}

export default PaymentButton;