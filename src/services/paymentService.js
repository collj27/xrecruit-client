export async function redirectToCheckout() {
    try {
        let route = process.env.REACT_APP_API_URL + "checkout"

        // get stripe checkout session url and redirect
        fetch(route)
            .then((res) => res.json())
            .then((url) => window.location.href =url)
    } catch (e){
        console.log(e)
        alert("Error redirecting to  url, check console")
    }
}