import React from "react";
import PropTypes from 'prop-types'
import axios from 'axios'
import setHeaders from "../../components/Headers";
import {Grid} from "@material-ui/core";
import format from 'date-fns/format'

class BookingForm extends React.Component{
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.dateRef = React.createRef()
    }

    handleSubmit(e) {
        e.preventDefault();
        setHeaders();
        axios
            .post('/api/v1/bookings', {
                booking: {
                    date: this.dateRef.current.value,
                    occupied: false,
                },
            })
            .then(response => {
                const todoItem = response.data
                this.props.createTodoItem(todoItem);
                this.props.clearErrors();
            })
            .catch(error => {
                this.props.handleErrors(error);
            })
        e.target.reset()
    }

    render() {
        let now = format(
            new Date(),
            "yyyy-MM-dd'T'hh:mm"
        )
        return (
            <form onSubmit={this.handleSubmit} className="my-3">
                <div className="form-row">
                    <div className="form-group col-md-8">
                        <Grid container justify="space-around">
                            <input
                                id={'form-datetime'}
                                className="form-control"
                                type="datetime-local"
                                min = {now}
                                defaultValue={now}
                                ref={this.dateRef}
                            />
                        </Grid>
                    </div>
                    <div className="form-group col-md-4">
                        <button className="btn btn-outline-success btn-block">
                            Add Slot
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}

export default BookingForm

BookingForm.propTypes = {
    createTodoItem: PropTypes.func.isRequired,
}
