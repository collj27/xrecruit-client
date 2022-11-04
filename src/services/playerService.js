import Parse from 'parse/dist/parse.min.js';

export async function fetchPlayerByObjectId(objectId) {
    try {
        const playerQuery = new Parse.Query('Player')
        playerQuery.equalTo('objectId', objectId);
        const player = await playerQuery.first();

        return player
    } catch (e) {
        console.log("error", e)
        alert("Error fetching player, check console")
    }
}

export async function fetchStatsByPlayerId(player) {
    try {
       /* const playerQuery = new Parse.Query('Player')
        playerQuery.equalTo('objectId', playerId);
        const player = await playerQuery.first();*/

        const tableName = player.get('statsTableName')

        const statsQuery = new Parse.Query(tableName)
        statsQuery.equalTo('playerId', player)
        const stats = await statsQuery.find()

        return stats
    } catch (e) {
        console.log("error", e)
        alert("Error fetching stats, check console")
    }
}