import Table from "react-bootstrap/Table";


function PlayerStats(props) {
    let stats = props.stats
    let tableName = props.tableName
    let header = null;
    let body = null;
    if (stats) {
        // dyanamically create table
        switch (tableName) {
            //TODO: change to qbStats and add enum
            case "Stats":
                let keys = []
                let values = []
                for (let key in stats[0].toJSON()) {
                    keys.push(key)
                    console.log( typeof stats[0].toJSON()[key])
                    if (typeof stats[0].toJSON()[key] != "object")
                        values.push(stats[0].toJSON()[key])
                }
                header = <thead>
                <tr>
                    {keys.map(k => <th scope='col' id={k}>{k}</th>)}
                </tr>
                </thead>

                body =
                    <tbody>
                    <tr>
                        {values.map(x => {<td id={x}>{x}</td>})}
                    </tr>
                    </tbody>


        }
    }

    return (
        <Table borderless={true} responsive="sm">
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
            {header}
            {body}
        </Table>);
}

export default PlayerStats;