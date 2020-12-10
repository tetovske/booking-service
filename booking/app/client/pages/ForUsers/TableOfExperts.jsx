import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Row from "./RowOfExperts";

const rows = [
    createData(1, 'expert_1'),
    createData(2, 'expert_2'),
    createData(3, 'expert_3'),
    // createData(4, 'expert_4', [{date: '20-12-2020'}, {time: '12:00'}]),
    // createData(5, 'expert_5', [{date: '20-12-2020'}, {time: '12:00'}]),
];
function createData(id, name) {
    return {
        id,
        name,
        dashboard: [
            { date: '2020-01-05', time: '10:00' },
            { date: '2020-01-02', time: '10:00' },
        ],
    };
}

class ForUser extends React.Component{
    render() {
        console.log(rows)
        return (
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table" className={'table-responsive'}>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                #
                            </TableCell>
                            <TableCell />
                            <TableCell>
                                Name
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <Row key={row.id} row={row} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
}

export default ForUser
