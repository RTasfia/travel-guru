import React, { useState } from 'react';
import './Home.css';

import NavBefore from '../NavBerfore/NavBefore';
import fakeDataForTravelSpot from '../../fakeDataForTravelSpot/fakeDataForTravelSpot';
import { Button, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import sajek from '../../Image/SAJEK.png'
import sreeMangal from '../../Image/SREEMANGAL.png';
import sundarBan from '../../Image/SUNDARBAN.png';



const Home = () => {



    const [allPlace, setAllPlace] = useState(fakeDataForTravelSpot);

    const handleSelectPlace = (x) => {

        


    }
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div className="Background-img">
            <div className="container">
            <NavBefore></NavBefore>
            <div className="row">
                <div className="col-12 col-md-6 about-place">
                    <h1>{allPlace[index].title}</h1>
                    <h4>{allPlace[index].info}</h4>
                    <br/>
                    <Link to = {`/booking/${index}`}><Button style={{backgroundColor:"#F9A51A",width: "110px", border: "none", borderRadius: "5px"}}>Booking</Button></Link>
                </div>
                <div className="col-12 col-md-6" style={{}}>
                    <Carousel activeIndex={index} onSelect={handleSelect} style={{ width: "50%", margin: "20%" }}>
                        <Carousel.Item>
                            <Link to={`/booking/${index}`}>
                                <div onClick={() => handleSelectPlace(index)} className="card" style={{ backgroundImage: `url(${sajek})`,border: "2px solid #F9A51A ",borderRadius: "25px"}}>
                                    <p className="card-text">SAJEK</p>
                                </div>
                            </Link>
                        </Carousel.Item>

                        <Carousel.Item>
                            <Link to={`/booking/${index}`}>
                                <div onClick={() => handleSelectPlace(index)} className="card" style={{ backgroundImage: `url(${sreeMangal})`,border: "2px solid #F9A51A ",borderRadius: "25px"}}>
                                    <p className="card-text">SREEMANGAL</p>
                                </div>
                            </Link>
                        </Carousel.Item>

                        <Carousel.Item>
                            <Link to={`/booking/${index}`}>
                                <div onClick={() => handleSelectPlace(index)} className="card" style={{ backgroundImage: `url(${sundarBan})`,border: "2px solid #F9A51A",borderRadius: "25px"}}>
                                    <p className="card-text">SUNDARBAN</p>
                                </div>
                            </Link>
                        </Carousel.Item>

                    </Carousel>
                </div>

            </div>

            </div>

            




        </div>
    );
};

export default Home;