import React, { useState } from 'react';
import fakeDataForHotel from '../../fakeDataForHotel/fakeDataForHotel';
import GoogleMap from '../GoogleMap/GoogleMap';
import NavAfter from '../NavAfter/NavAfter';
import 'leaflet/dist/leaflet.css';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import fakeDataForTravelSpot from '../../fakeDataForTravelSpot/fakeDataForTravelSpot';

const Hotel = () => {
    const [allHotel, setAllHotel] = useState(fakeDataForHotel);
    const [allPlace, setAllPlace] = useState(fakeDataForTravelSpot);
    const {title} = useParams();
    const currentPlace = allPlace.find(place => place.title===title)
    const {position,hotel} = currentPlace;
    return (
        <div className="container">
            <NavAfter></NavAfter>
            <br/>
            <h2>Stay in {title}</h2>
            <div className="row">

            <div className="col-12 col-sm-12 col-md-6">
            {
                allHotel.map(hotel =>
                    <div className="row"  style={{marginBottom: "20px"}}>
                        <div className="col-6">
                            <img className="img-fluid" src={require(`../../Image/${hotel.img}`)} alt="" />
                        </div>
                        <div className="col-6">
                            <h5>{hotel.title}</h5>
                            <p>{hotel.facilities}</p>
                            <p>{hotel.fexibility}</p>
                            <p> <img style={{height:"15px",width:"15px"}} src={require(`../../Icon/star_1_.png`)} alt=""/> {hotel.rating}  {hotel.price}</p>
                            

                        </div>
                    </div>
                )
            }
            </div>
            <div className="col-12 col-sm-12 col-md-6">
            <GoogleMap position = {position} hotel = {hotel}></GoogleMap>
            </div>
            </div>
            
        </div>
    );
};

export default Hotel;