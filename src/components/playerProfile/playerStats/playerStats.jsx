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

        // loop through each seasons stats
       Object.values(stats).forEach(seasonStatsObj => {
           // populate keys array if empty
           if (keys.length === 0) {
               keys = Object.keys(seasonStatsObj)
           }

           // remove player_id and stats_id from object
           // TODO: remove this in api
           delete seasonStatsObj.player_id
           delete seasonStatsObj.stats_id

           // convert object to array and add row element to body array
           let seasonStatsArr = Object.values(seasonStatsObj)
           body.push(<tr>{seasonStatsArr.map((x, index) => <td key={index}>{x}</td>)}</tr>)
       });

        header = keys.map((k, index) => <th scope='col' key={index}>{statsColsDict[k]}</th>)
    }

    return (
        <Table borderless={true} responsive="lg">
            <thead>
                <tr>
                    {header}
                </tr>
            </thead>
            <tbody>
                {body}
            </tbody>
        </Table>);
}

export default PlayerStats;