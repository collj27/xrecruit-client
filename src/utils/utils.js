
export const statsColsDict = {
    "season" : "SEASON",
    "completion_pct": "PCT",
    "passing_yds": "PASS YDS",
    "passing_tds": "PASS TD",
    "fumbles" : "FUM",
    "interceptions": "INT",
    "rushing_tds":"RUSH TD",
    "rushing_yds":"RUSH YDS"
}

// make sure this matches positionEnum in api
export const positionDict= {
    1: "QB",
    2: "WR"
}
export function calculateAge(dob){
    if (typeof dob == 'string')
        dob = new Date(dob)
    let today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    let m = today.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate()))
    {
        age--;
    }
    return age;
}