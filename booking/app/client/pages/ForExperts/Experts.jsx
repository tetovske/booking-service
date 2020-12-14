import React from "react";
import axios from "axios"

import BookingRow from "./BookingRow";
import BookingTable from "./BookingTable";
import BookingForm from "./BookingForm";
import Spinner from "../../components/Spinner";

function createData(name, date,occupied) {
    return { name, date, occupied};
}

const rows = [
    createData('', '2020-12-28T12:00',false),
    createData('us2', '2020-12-29T10:00', true),
    createData('us3', '2020-12-30T10:00', true),
    createData('', '2020-12-31T10:00', false),
    createData('', '2020-12-14T01:58', false),
];

class ForExperts extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            bookings: [],
            isLoading: true,
            errorMessage: null
        };
        this.getTodoItems = this.getTodoItems.bind(this);
        this.createTodoItem = this.createTodoItem.bind(this);
        this.handleErrors = this.handleErrors.bind(this);
        this.clearErrors = this.clearErrors.bind(this);
    }
    componentDidMount() {
        this.getTodoItems();
    }
    getTodoItems() {
        // axios
        //     // .get('broken_url')
        //     .get("/api/v1/bookings")
        //     .then(response => {
        //         this.clearErrors();
        //         this.setState({ isLoading: true });
        //         const bookings = response.data;
        //         this.setState({ bookings });
        //         this.setState({ isLoading: false });
        //     })
        //     .catch(error => {
        //         this.setState({ isLoading: true });
        //         this.setState({
        //             errorMessage: {
        //                 message: "There was an error loading your items..."
        //             }
        //         });
        //     });
    }
    createTodoItem(booking) {
        const bookings = [booking, ...this.state.bookings];
        this.setState({ booking });
    }

    handleErrors(errorMessage) {
        this.setState({ errorMessage });
    }
    clearErrors() {
        this.setState({
            errorMessage: null
        });
    }
    render() {
        return(
            <>
                { (
                    <>
                        <BookingForm
                            createTodoItem={this.createTodoItem}
                            handleErrors={this.handleErrors}
                            clearErrors={this.clearErrors}
                        />
                        <BookingTable
                            toggleCompletedTodoItems={this.toggleCompletedTodoItems}
                            hideCompletedTodoItems={this.state.hideCompletedTodoItems}
                        >
                            {rows.map(booking => (
                                <BookingRow
                                    key={booking.name}
                                    bookings={booking}
                                    getBookings={this.getTodoItems}
                                    handleErrors={this.handleErrors}
                                    clearErrors={this.clearErrors}
                                />
                            ))}
                        </BookingTable>
                    </>
                )}
                {/*{this.state.isLoading && <Spinner />}*/}
            </>
        )
    }
}

export default ForExperts
