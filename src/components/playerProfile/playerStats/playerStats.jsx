import Table from "react-bootstrap/Table";
import {statsColsDict} from "../../../utils/utils";


function PlayerStats(props) {
    let stats = props.stats
    let header = null;
    let body = [];

    let hiddenCols = ["createdAt", "updatedAt", "objectId"]

    if (stats) {
        let keys = []

        // get keys and create column headers
        for (let key in stats[0].toJSON()) {
            if (typeof stats[0].toJSON()[key] != "object" && !hiddenCols.includes(key))
                keys.push(key)
        }

        header = keys.map((k, index) => <th scope='col' key={index}>{statsColsDict[k]}</th>)

        // create body
        for (let i in stats) {
            let row = []
            for (let key in stats[i].toJSON()) {
                if (typeof stats[i].toJSON()[key] != "object" && !hiddenCols.includes(key)) {
                    row.push(stats[i].toJSON()[key])
                }
            }
            body.push(<tr>{row.map((x, index) => <td key={index}>{x}</td>)}</tr>)
        }
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