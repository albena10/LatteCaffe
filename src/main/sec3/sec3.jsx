import './sec3.css'
import React from 'react';
import img_1 from "./image/IMAGE (16).png"
const Sec3 = () => {
    return (
       <section className="sec3">
           <div className="sec3-box">
               <div className="sec3-left">
                   <h6>Menu</h6>
                   <p> We change our menu every season. <br/>
                       Here is what we are currently <br/>
                       dishing up.</p>
                   <button className="btn1">Food Menu</button>
                   <button className="btn2">Drinks Menu</button>
                   <button className="btn3">Takeaway Menu</button>
               </div>
               <div className="sec3-right">
                   <img src={img_1} alt=""/>
               </div>
           </div>
       </section>
    );
};

export default Sec3;