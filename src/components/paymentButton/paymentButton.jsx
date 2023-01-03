import {Dropdown, DropdownButton, Spinner} from "react-bootstrap";
import {redirectToCheckout} from "../../services/paymentService";
import {useState} from "react";
import "./paymentButton.css"

//TODO: use session object to verify destination before redirecting to stripeCheckout
function PaymentButton(props) {

    //toggle recruit button
    const [isDisabled, setIsDisabled] = useState(false);

    // make button title a spinner if still loading
    const spinner = <Spinner animation="border"/>
    const btnTitle = props?.btnName === undefined ? spinner : props.btnPrefix + props.btnName

    const handleClick = async (name, dollarAmount) => {
        // disable submit for 5 secs to prevent dup clicks
        setIsDisabled(true)
        setTimeout(() => setIsDisabled(false), 5000);

        // redirect to stripe
        await redirectToCheckout(name, dollarAmount)
    };

    return (
        <DropdownButton className="payment-button" disabled={isDisabled}
                        title={btnTitle}>
            <Dropdown.ItemText>Select an amount</Dropdown.ItemText>
            <Dropdown.Divider/>
            <Dropdown.Item as="button" onClick={() => handleClick(props?.btnName, 10)}>$10</Dropdown.Item>
            <Dropdown.Item as="button" onClick={() => handleClick(props?.btnName, 20)}>$20</Dropdown.Item>
            <Dropdown.Item as="button" onClick={() => handleClick(props?.btnName, 50)}>$50</Dropdown.Item>
            <Dropdown.Item as="button" onClick={() => handleClick(props?.btnName, 100)}>$100</Dropdown.Item>
        </DropdownButton>
    );
}

export default PaymentButton;