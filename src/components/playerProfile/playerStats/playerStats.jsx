import Table from "react-bootstrap/Table";
import {statsColsDict} from "../../../utils/utils";


//TODO: see if there's a library for this
function PlayerStats(props) {
    let stats = props.stats
    let header = null;
    let body = [];

    // only create table when stats is initialized
    if (stats) {
        let keys = []
        let row = []

        console.log("hii")
        // loop through each season's stats
        Object.values(stats).forEach(seasonStatsObj => {
            let objKeys = Object.keys(seasonStatsObj)
            let objArr = Object.entries(seasonStatsObj)


            if (objKeys.includes("season") && !keys.includes(statsColsDict.season)) {
                keys.push(statsColsDict.season)
                let keyValue = objArr.find(x => x[0] === "season")
                let value = keyValue[1]
                row.push(<td>{value}</td>)
            }

            if (objKeys.includes("passing_tds") && !keys.includes(statsColsDict.passing_tds)) {
                keys.push(statsColsDict.passing_tds)
                let keyValue = objArr.find(x => x[0] === "passing_tds")
                let value = keyValue[1]
                row.push(<td>{value}</td>)
            }

            if (objKeys.includes("passing_yds") && !keys.includes(statsColsDict.passing_yds)) {
                keys.push(statsColsDict.passing_yds)
                let value = objArr.find(x => x[0] === "passing_yds")
               // body.push(<tr><td>{value}</td>)}</tr>)
            }

            if (objKeys.includes("rushing_tds") && !keys.includes(statsColsDict.rushing_tds)) {
                keys.push(statsColsDict.rushing_tds)
                let value = objArr.find(x => x[0] === "rushing_tds")
                //body.push(<tr><td>{value}</td>)}</tr>)
            }


            if (objKeys.includes("rushing_yds") && !keys.includes(statsColsDict.rushing_yds)) {
                keys.push(statsColsDict.rushing_yds)
                let value = objArr.find(x => x[0] === "rushing_yds")
                //body.push(<tr><td>{value}</td>)}</tr>)
            }

            if (objKeys.includes("interceptions") && !keys.includes(statsColsDict.interceptions)) {
                keys.push(statsColsDict.interceptions)
                let value = objArr.find(x => x[0] === "interceptions")
               // body.push(<tr><td>{value}</td>)}</tr>)
            }

            if (objKeys.includes("fumbles")&& !keys.includes(statsColsDict.fumbles)) {
                keys.push(statsColsDict.fumbles)
                let value = objArr.find(x => x[0] === "fumbles")
                //body.push(<tr><td>{value}</td>)}</tr>)
            }

            console.log(row)
            body.push(<tr>{row}</tr>)

        });

        // create header element from keys and stats cols dictionary

        header = keys.map((k, index) => <th scope='col' key={index}>{k}</th>)
    }

    return (
        <Table borderless={true} responsive="lg">
            <thead>
            <tr>{header}</tr>
            </thead>
            <tbody>{body}</tbody>
        </Table>);
}

export default PlayerStats;