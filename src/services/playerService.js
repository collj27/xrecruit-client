import Parse from 'parse/dist/parse.min.js';

export async function fetchPlayerByObjectId(objectId) {
    try {
        const query = new Parse.Query('Player');
        query.equalTo('objectId', objectId);
        const data = await query.first();

        return data
    } catch (e) {
        alert("Error fetching player, check console")
        console.log(e)
    }
}