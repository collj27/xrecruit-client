
export const statsColsDict = {
    "season" : "SEASON",
    "completion_pct": "PCT",
    "passing_yds": "YDS",
    "passing_tds": "TD",
    "fumbles" : "FUM",
    "interceptions": "INT",
    "rushing_tds":"TD",
    "rushing_yds":"YDS"
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