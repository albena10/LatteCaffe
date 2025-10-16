import './sec5.css'
import React from 'react';
import img_1 from "./image/IMAGE (17).png"
import img_2 from "./image/IMAGE (18).png"
import img_3 from "./image/IMAGE (19).png"


const Sec5 = () => {
    return (
       <section className="sec5">
           <div className="sec5-box">
               <div className="sec5-left">
                   <div className="sec5-left-top">
                       <img src={img_1} alt=""/>
                   </div>
                   <div className="sec5-left-bottom">
                       <img src={img_2} alt=""/>
                   </div>
               </div>
               <div className="sec5-right">
                   <img src={img_3} alt=""/>
               </div>
           </div>
       </section>
    );
};

export default Sec5;