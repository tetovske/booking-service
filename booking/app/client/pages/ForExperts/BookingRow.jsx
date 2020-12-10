import React from "react";
import PropTypes from 'prop-types'
import axios from "axios";
import _ from "lodash";

import MyPickers from "../../components/MyPickers";
import {DateTimePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

class BookingRow extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            selectedDate: this.props.bookings.date,
            occupied: this.props.bookings.occupied,
        };
        this.handleDestroy = this.handleDestroy.bind(this);
        this.path = `/api/v1/todo_items/${this.props.bookings.id}`;
        this.handleChange = this.handleChange.bind(this);
        this.updateBooking = this.updateBooking.bind(this);
        this.inputRef = React.createRef();
        this.occupiedRef = React.createRef();
    }
    handleDateChange() {

    }
    handleDestroy() {
        // setAxiosHeaders();
        const confirmation = confirm("Are you sure?");
        if (confirmation) {
            axios
                .delete(this.path)
                .then(response => {
                    this.props.getBookings();
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
    handleChange() {
        this.setState({
            complete: this.occupiedRef.current.checked
        });
        this.updateBooking();
    }
    updateBooking = _.debounce(() => {
        // setAxiosHeaders();
        axios
            .put(this.path, {
                todo_item: {
                    title: this.inputRef.current.value,
                    complete: this.occupiedRef.current.checked
                }
            })
            .then(response => {
                this.props.clearErrors();
            })
            .catch(error => {
                this.props.handleErrors(error);
            });
    }, 1000);
    render() {
        const { bookings } = this.props
        return (
            <tr className={`${ this.state.complete && this.props.hideCompletedTodoItems ? `d-none` : "" }`}>
                <td>
                    <span>
                        {bookings.name}
                    </span>
                </td>
                <td>
                    <input
                        id={bookings.name}
                        className="form-control"
                        type="datetime-local"
                        min={new Date()}
                        value={bookings.date}
                        onChange={this.handleChange}
                    />
                </td>
                <td className="text-right">
                    <button
                        onClick={this.handleDestroy}
                        className="btn btn-outline-danger"
                    >
                        Delete
                    </button>
                </td>
            </tr>
        )
    }
}

export default BookingRow

BookingRow.propTypes = {
    bookings: PropTypes.object.isRequired,
    getBookings: PropTypes.func.isRequired,
    hideCompletedTodoItems: PropTypes.bool.isRequired,
    clearErrors: PropTypes.func.isRequired
}
