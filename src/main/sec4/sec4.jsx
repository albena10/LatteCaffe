import './sec4.css'
import React from 'react';

const Sec4 = () => {
    return (
        <section className="sec4">
            <div className="sec4-box">
                <div className="sec4-left">
                    <h6>Location</h6>
                    <p>101 Cuba St, <br/>
                        Te Aro, Wellington</p>
                </div>
                <div className="sec4-center">
                    <h6>Hours</h6>
                    <p>Tuesday to Friday<br/>
                        7AM - 3PM</p>
                    <p>Saturday to Sunday <br/>
                        8AM - 3PM</p>
                </div>
                <div className="sec4-right">
                    <h6>Mondays?</h6>
                    <p>We are closed on Mondays <br/>
                        to reflect and refuel</p>
                </div>
            </div>
        </section>
    );
};

export default Sec4;