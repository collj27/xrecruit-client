export async function fetchPlayerById(playerId) {
    try {
        let route = process.env.REACT_APP_API_URL + "players/" + playerId.toString()
        return fetch(route).then((res) => res.json())
    } catch (e){
        console.log(e)
        alert("Error fetching player, check console")
    }
}

export async function fetchPlayers() {
    try {
        let route = process.env.REACT_APP_API_URL + "players"
        return fetch(route).then((res) => res.json())
    } catch (e){
        console.log(e)
        alert("Error fetching players, check console")
    }
}