import React from "react";
import PropTypes from 'prop-types'
import axios from 'axios'
import setHeaders from "../../components/Headers";
import MyPickers from "../../components/MyPickers";
import {Grid} from "@material-ui/core";
class BookingForm extends React.Component{
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.titleRef = React.createRef()
    }

    handleSubmit(e) {
        e.preventDefault();
        setHeaders();
        // axios
        //     .post('/api/v1/todo_items', {
        //         todo_item: {
        //             title: this.titleRef.current.value,
        //             complete: false,
        //         },
        //     })
        //     .then(response => {
        //         const todoItem = response.data
        //         this.props.createTodoItem(todoItem);
        //         this.props.clearErrors();
        //     })
        //     .catch(error => {
        //         this.props.handleErrors(error);
        //     })
        e.target.reset()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="my-3">
                <div className="form-row">
                    <div className="form-group col-md-8">
                        <Grid container justify="space-around">
                            <input
                                id={'form-datetime'}
                                className="form-control"
                                type="datetime-local"
                                min={new Date()}
                                placeholder={new Date()}
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
    handleErrors: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
}

