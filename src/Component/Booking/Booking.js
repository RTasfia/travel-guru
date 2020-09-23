import React, { useState } from 'react';
import NavBefore from '../NavBerfore/NavBefore';
import './Booking.css';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import fakeDataForTravelSpot from '../../fakeDataForTravelSpot/fakeDataForTravelSpot';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const Booking = () => {
    const [startingdDate, setStartingdDate] = useState(new Date('2020-09-18'));
    const [endingDate, setEndingDate] = useState(new Date('2020-09-18'));
    const [placeInfo, setPlaceInfo] = useState(fakeDataForTravelSpot);
    const {id} = useParams();
    const handleStartingDate = (date) => {
        setStartingdDate(date);
    };
    const handleEndingDate = (date) => {
        setEndingDate(date);
    }
    const {title,info} = placeInfo[id];
    const history = useHistory();
    const handleBook = () => {
        history.push(`/hotel/${title}`);
    }


    return (
        <div className="Background-img">
            <div className="container">
                <NavBefore></NavBefore>
                <div className="row">
                    <div className="col-sm-12 col-12 col-md-6 about-place">
                        <h1>{title}</h1>
                        <h4>{info}</h4>
                    </div>
                    <div className="col-sm-12 col-12 col-md-6">
                        <form action="" className="booking-form">
                            <p>Origin</p>
                            <input type="text" name="email" required/>
                            <br />
                            <br />
                            <p>Destination</p>
                            <input type="text" name="destination" required/>
                            <br />
                            <br />
                            <div className="row">
                                <div style={{ margin: "15px" }}>
                                    <p>From</p>
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>

                                        <KeyboardDatePicker
                                            disableToolbar
                                            variant="inline"
                                            format="MM/dd/yyyy"
                                            margin="normal"
                                            id="date-picker-inline"
                                            value={startingdDate}
                                            onChange={handleStartingDate}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                        />
                                    </MuiPickersUtilsProvider>

                                </div>
                                <div style={{ margin: "15px" }}>
                                    <p>To</p>
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>

                                        <KeyboardDatePicker
                                            margin="normal"
                                            id="date-picker-dialog"
                                            format="MM/dd/yyyy"
                                            value={endingDate}
                                            onChange={handleEndingDate}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                        />
                                    </MuiPickersUtilsProvider>
                                </div>
                            </div>
                            <br />
                            <input onClick={() => handleBook()} style={{ backgroundColor: "#F9A51A"}} type="submit" value="Start Booking"/>

                        </form>

                    </div>
                </div>

            </div>


        </div>
    );
};

export default Booking;