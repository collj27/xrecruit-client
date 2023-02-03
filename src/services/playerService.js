export async function fetchPlayerById(playerId) {
    try {
        let route = process.env.REACT_APP_API_URL + "GetPlayerById/" + playerId.toString()
        return fetch(route).then((res) => res.json())
    } catch (e){
        console.log(e)
        alert("Error fetching player, check console")
    }
}

export async function fetchPlayers() {
    try {
        let route = process.env.REACT_APP_API_URL + "GetPlayers"
        return fetch(route).then((res) => res.json())
    } catch (e){
        console.log(e)
        alert("Error fetching players, check console")
    }
}

export async function fetchPlayerStats(playerId) {
    try {
        let route = process.env.REACT_APP_API_URL + "GetPlayerStats/" + playerId.toString()
        return fetch(route).then((res) => res.json())
    } catch (e){
        console.log(e)
        alert("Error fetching players, check console")
    }
}