import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import PlayerPage from "../playerPage/playerPage";

function PlayerStats() {
    return (
                <Table borderless={true} responsive="sm">
                    <thead>
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
                    </tbody>
                </Table>
);}

export default PlayerStats;