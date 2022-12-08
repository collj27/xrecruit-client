import {ArrowRight} from "react-bootstrap-icons";
import {Button} from "react-bootstrap";
import {redirectToCheckout} from "../../services/paymentService";
import {useState} from "react";
import "./paymentButton.css"

//TODO: use session object to verify destination before redirecting to stripeCheckout
function PaymentButton(props) {

    //toggle recruit button
    const [isDisabled, setIsDisabled] = useState(false);

    const handleClick = async () => {

        // disable submit for 5 secs to prevent dup clicks
        setIsDisabled(true)
        setTimeout(() => setIsDisabled(false), 5000);

        // redirect to stripe
        await redirectToCheckout()
    };


    return (
        <Button className="payment-button" onClick={handleClick} disabled={isDisabled}>
            <span> {props?.btnPrefix} {props?.btnName} <ArrowRight/></span>
        </Button>
    );
}

export default PaymentButton;