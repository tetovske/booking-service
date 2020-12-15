import React from "react";
import PropTypes from 'prop-types'
import axios from "axios";
import _ from "lodash";

import format from "date-fns/format";

class BookingRow extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
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
            <tr>
                <td>
                    <span>
                        {bookings.name}
                    </span>
                </td>
                <td>
                    <input
                        id={`booking__'${bookings.name}`}
                        className="form-control"
                        type="datetime-local"
                        disabled={bookings.occupied}
                        min={format(
                            new Date(),
                            "yyyy-MM-dd'T'hh:mm"
                        )}
                        value={bookings.date}
                        onChange={this.handleChange}
                    />
                </td>
                <td className="text-right">
                    <button
                        disabled={bookings.occupied}
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
    clearErrors: PropTypes.func.isRequired
}
