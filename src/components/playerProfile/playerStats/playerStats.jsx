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

        // loop through each season's stats
        Object.values(stats).forEach(seasonStatsObj => {
            // remove player_id and stats_id from object
            // TODO: remove this in api
            delete seasonStatsObj.player_id
            delete seasonStatsObj.stats_id

            // move seasons key,value to front of entries
            let first = "season";
            let seasonStatsArr = Object.entries(seasonStatsObj)
            seasonStatsArr.sort(function (x, y) {
                return x[0] === first ? -1 : y[0] === first ? 1 : 0;
            });

            // set keys array
            keys = seasonStatsArr.map(x => x[0])

            // add row elements to body array
            body.push(<tr key={keys[0]}>{seasonStatsArr.map((x, index) => <td key={index}>{x[1]}</td>)}</tr>)
        });

        // create header element from keys
        header = keys.map((k, index) => <th scope='col' key={index}>{statsColsDict[k]}</th>)
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