// import React from "react";
// import ReactDOM from 'react-dom'
//
//
// class MyDashboard extends React.Component{
//     render() {
//         return (
//             <>
//                 <div className="container">
//                     <p>
//                         This is my dashboard
//                     </p>
//                 </div>
//             </>
//         );
//     }
// }
//
// export default MyDashboard
import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


function createData(name, date, time) {
    return { name, date, time };
}

const rows = [
    createData('exp1', '28-12-2020', '10:00'),
    createData('exp2', '29-12-2020', '10:00'),
    createData('exp3', '30-12-2020', '10:00'),
    createData('exp4', '31-12-2020', '10:00'),
];

export default function DenseTable() {

    return (
        <TableContainer component={Paper}>
            <Table  size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Time</TableCell>
                        <TableCell align="right">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell>{row.date}</TableCell>
                            <TableCell>{row.time}</TableCell>
                            <TableCell align="right">
                                <button
                                    className="btn btn-outline-danger"
                                >
                                    Cancel
                                </button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
