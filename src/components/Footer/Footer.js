import React from "react";
import './Footer.css';
import Earth from "../../img/planet-2.png";
import facebook from "../../img/facebook.png";
import instagram from "../../img/instagram.png";
import telegram from "../../img/telegram.png";
import erkir from "../../img/erkir.jpg"


export default function Footer(){
    return(
        <div>
        <div className="footer-bg">
        <div className="footer-left">    
            <h1 className="footer-h1">Our small planet earth in the infinite universe</h1>
            <h2 className="footer-h2">Galaxy Milke Way</h2>
         </div>

            <div className="footer-right">
                 <img className="erkir" src={erkir}/>
                 <h3 className="footer-h3">You can use these links to go to our other websites</h3>
                <a href=""><img className="logo" src={facebook}/></a>
                <a href=""><img className="logo" src={instagram}/></a>
                <a href=""><img className="logo" src={telegram}/></a>
            </div>
       

        </div>
        <div className="footer-earth">
            <div className=""><h1 className="earth">Earth</h1></div>
            <div className="earth-ani"><img className="earth-img" src={Earth}/></div>
        </div>
        <div className="line-center">
             <div className="line"></div>
        </div>
        </div>
        
    )
}