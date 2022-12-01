export async function fetchSchoolById(schoolId) {
    try {
        let route = process.env.REACT_APP_API_URL + "schools/" + schoolId.toString()
        return fetch(route).then((res) => res.json())
    } catch (e){
        console.log(e)
        alert("Error fetching school, check console")
    }
}