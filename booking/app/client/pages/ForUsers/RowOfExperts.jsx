import React from "react";
import PropTypes from "prop-types";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import Collapse from "@material-ui/core/Collapse";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import {makeStyles} from "@material-ui/core/styles";
import {withStyles} from "@material-ui/styles";

const styles= makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
});

class Row extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }
    render(){
        const { row } = this.props;
        return (
            <React.Fragment>
                <TableRow
                    className={this.props.classes.root}
                    selected={this.state.open}
                >
                    <TableCell>
                        <IconButton aria-label="expand row" size="small" onClick={() => this.setState({open: this.state.open = !this.state.open })}>
                            { this.state.open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon /> }
                        </IconButton>
                    </TableCell>
                    <TableCell component="th" scope="row">
                        {row.id}
                    </TableCell>
                    <TableCell component="th" scope="row">
                        {row.name}
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                            <Box margin={2}>
                                <Typography variant="h6" gutterBottom component="div">
                                    Dashboard
                                </Typography>
                                <Table size="small" aria-label="purchases">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>
                                                Date
                                            </TableCell>
                                            <TableCell >
                                                Time
                                            </TableCell>
                                            <TableCell >
                                                Action
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {row.dashboard.map((dashRow) => (
                                            <TableRow key={dashRow.date}>
                                                <TableCell component="th" scope="row">
                                                    {dashRow.date}
                                                </TableCell>
                                                <TableCell>
                                                    {dashRow.time}
                                                </TableCell>
                                                <TableCell>
                                                    <button className="btn btn-outline-success">
                                                        Check in
                                                    </button>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </Box>
                        </Collapse>
                    </TableCell>
                </TableRow>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(Row)

Row.propTypes = {
    classes: PropTypes.object.isRequired,
    row: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        dashboard: PropTypes.arrayOf(
            PropTypes.shape({
                date: PropTypes.string.isRequired,
                time: PropTypes.string.isRequired,
            }),
        ).isRequired,
    }).isRequired,
};
