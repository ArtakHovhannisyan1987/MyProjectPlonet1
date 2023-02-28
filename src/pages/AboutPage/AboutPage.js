import React from 'react';
import Likes from '../../components/Likes/Likes';
import Title from '../../components/Title/Title';
import Comments from '../../components/Comments/Comments';
import "./AboutPage.css";
import Jupiter from "../../img/jupiter.jpg"


export default function About (){
   return (
    <div className='about'>
        <div className='wrap'>
            <div className='card'>
                <div className='card-image'>
                    <img src={Jupiter}/>
                    <Title/>
                    <Likes/>
                </div>
                <Comments/>
            </div>
        </div>
    </div>
   );
};