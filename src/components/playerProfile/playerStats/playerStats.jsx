import Table from "react-bootstrap/Table";
import {statsColsDict} from "../../../utils/utils";



function PlayerStats(props) {
    let stats = props.stats
    // let tableName = props.tableName
    let header = null;
    let body = [];

    let hiddenCols = ["createdAt", "updatedAt", "objectId"]

    if (stats) {
        let keys = []
        let values = []

        // get keys and create column headers
        for (let key in stats[0].toJSON()){
            if (typeof stats[0].toJSON()[key] != "object" &&  !hiddenCols.includes(key) )
                keys.push(key)
        }

        header = keys.map((k, index) => <th scope='col' key={index}>{statsColsDict[k]}</th>)

        // g
        for (let i in stats) {
            let row = []
            for (let key in stats[i].toJSON()) {
                if (typeof stats[i].toJSON()[key] != "object"  && !hiddenCols.includes(key)) {
                    row.push(stats[i].toJSON()[key])
                }
            }
            console.log(row)
            body.push(<tr>{row.map((x, index) =>  <td key={index}>{x}</td> )}</tr>)
        }




        // add data to table body


    }

    return (
        <Table borderless={true} responsive="lg">
            {/*<thead>
            <tr>
                <th scope='col'></th>
                <th scope='col'>PCT</th>
                <th scope='col'>YDS</th>
                <th scope='col'>TD</th>
                <th scope='col'>INT</th>
                <th scope='col'>FUM</th>
                <th scope='col'>CAR</th>
                <th scope='col'>YDS</th>
                <th scope='col'>TD</th>
            </tr>
            </thead>

            <tbody>
            <tr>
                <th scope='row'>2021</th>
                <td>77</td>
                <td>5,271</td>
                <td>41</td>
                <td>2</td>
                <td>0</td>
                <td>300</td>
                <td>3,000</td>
                <td>20</td>
            </tr>
            <tr>
                <th scope='row'>2022</th>
                <td>77</td>
                <td>5,271</td>
                <td>41</td>
                <td>2</td>
                <td>0</td>
                <td>300</td>
                <td>3,000</td>
                <td>20</td>
            </tr>
            </tbody>*/}
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