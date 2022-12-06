export async function redirectToCheckout() {
    try {
        let route = process.env.REACT_APP_API_URL + "checkout"
        fetch(route)
            .then((res) => res.json())
            .then((url) => window.location.replace(url)) // redirect to stripe stripeCheckout url
    } catch (e){
        console.log(e)
        alert("Error redirecting to  url, check console")
    }
}