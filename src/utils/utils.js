
export const statsColsDict = {
    "year" : "SEASON",
    "completionPct": "PCT",
    "passingYds": "YDS",
    "passingTd": "TD",
    "fumbles" : "FUM",
    "interceptions": "INT",
    "rushingTd":"TD",
    "rushingYds":"YDS"
}



export function calculateAge(dob){
    console.log(dob)
    let today = new Date();
    console.log(today)
    let age = today.getFullYear() - dob.getFullYear();
    let m = today.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate()))
    {
        age--;
    }
    return age;
}