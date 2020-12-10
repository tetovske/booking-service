import React, {useState} from "react";

import {
    MuiPickersUtilsProvider,
    DateTimePicker
} from '@material-ui/pickers';
import DateFnsUtils from "@date-io/date-fns";

function MyPickers () {
    const [selectedDate, handleDateChange] = useState(selectedDate);
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DateTimePicker
                margin="normal"
                id="date-picker"
                format="dd/MM/yyyy HH:mm"
                disablePast
                value={selectedDate}
                onChange={handleDateChange}
            />
        </MuiPickersUtilsProvider>

    )
}

export default MyPickers

// <MuiPickersUtilsProvider utils={DateFnsUtils}>
//     <DateTimePicker
// margin="normal"
// id={bookings.name}
// format="dd/MM/yyyy HH:mm"
// disablePast
// ampm={false}
// value={this.state.selectedDate}
// onChange={() => this.handleDateChange( {selectedDate: this.state.selectedDate} )}
// />
// </MuiPickersUtilsProvider>
