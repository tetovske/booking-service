import React from "react";

class BookingTable extends React.Component{
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <>
                <hr />
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">User</th>
                            <th scope="col">Date&Time</th>
                            <th scope="col" className="text-right">
                                Actions
                            </th>
                        </tr>
                        </thead>
                        <tbody>{this.props.children}</tbody>
                    </table>
                </div>
            </>
        )
    }
}

export default BookingTable
