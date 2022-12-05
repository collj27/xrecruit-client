import Table from "react-bootstrap/Table";
import {statsColsDict} from "../../../utils/utils";
import './playerStats.css'

//TODO: see if there's a library for this
function PlayerStats(props) {
    let stats = props.stats
    let header = null;
    let body = [];

    // only create table when stats is initialized
    if (stats) {
        let keys = []

    // TODO: figure out better key than math.random
        // loop through each season's stats
        Object.values(stats).forEach(seasonStatsObj => {
            let objKeys = Object.keys(seasonStatsObj)
            let objArr = Object.entries(seasonStatsObj)
            let row = []

            if (objKeys.includes("season")) {
                // if key does not exist in array, add it
                if (!keys.includes(statsColsDict.season))
                    keys.push(statsColsDict.season)

                // get data cell value and add to row array
                let keyValue = objArr.find(x => x[0] === "season")
                let value = keyValue[1]
                row.push(<td key={Math.random()}>{value}</td>)
            }

            if (objKeys.includes("passing_tds")) {
                if (!keys.includes(statsColsDict.passing_tds))
                    keys.push(statsColsDict.passing_tds)
                let keyValue = objArr.find(x => x[0] === "passing_tds")
                let value = keyValue[1]
                row.push(<td key={Math.random()}>{value}</td>)
            }

            if (objKeys.includes("passing_yds")) {
                if (!keys.includes(statsColsDict.passing_yds))
                    keys.push(statsColsDict.passing_yds)
                let keyValue = objArr.find(x => x[0] === "passing_yds")
                let value = keyValue[1]
                row.push(<td key={Math.random()}>{value}</td>)
            }

            if (objKeys.includes("rushing_tds")) {
                if (!keys.includes(statsColsDict.rushing_tds))
                    keys.push(statsColsDict.rushing_tds)
                let keyValue = objArr.find(x => x[0] === "rushing_tds")
                let value = keyValue[1]
                row.push(<td key={Math.random()}>{value}</td>)
            }


            if (objKeys.includes("rushing_yds")) {
                if (!keys.includes(statsColsDict.rushing_yds))
                    keys.push(statsColsDict.rushing_yds)
                let keyValue = objArr.find(x => x[0] === "rushing_yds")
                let value = keyValue[1]
                row.push(<td key={Math.random()}>{value}</td>)
            }

            if (objKeys.includes("interceptions")) {
                if (!keys.includes(statsColsDict.interceptions))
                    keys.push(statsColsDict.interceptions)
                let keyValue = objArr.find(x => x[0] === "interceptions")
                let value = keyValue[1]
                row.push(<td key={Math.random()}>{value}</td>)
            }

            if (objKeys.includes("fumbles")) {
                if (!keys.includes(statsColsDict.fumbles))
                    keys.push(statsColsDict.fumbles)
                let keyValue = objArr.find(x => x[0] === "fumbles")
                let value = keyValue[1]
                row.push(<td key={Math.random()}>{value}</td>)
            }

            body.push(<tr key={Math.random()}>{row}</tr>)

        })

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