import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./HomePage.css";


export default function Home(){
    const [count, setCount] = useState(false);
    const [nkar, setNkar] = useState(false);
    const [real, setReal] = useState(false);
    return (
        <div>
            <div className='homeflex'>
                <div className='div'>
                    <div className='home-bg-1' onClick={()=>setCount((e)=>!e)}></div>
                    { count && <NavLink to={"https://en.wikipedia.org/wiki/Armenia"} className='home-h2'>Anciend Armenia</NavLink>}
                </div>
                <div className='div'>
                    <div className='home-bg-2' onClick={()=>setNkar((e)=>!e)}></div>
                    { nkar && <NavLink to={"https://ru.wikipedia.org/wiki/%D0%A2%D1%83%D1%80%D0%B8%D0%B7%D0%BC_%D0%B2_%D0%90%D1%80%D0%BC%D0%B5%D0%BD%D0%B8%D0%B8"} className='home-h2'>Tourism in Armenia</NavLink>}
                </div>
                <div className='div'>
                    <div className='home-bg-3' onClick={()=>setReal((e)=>!e)}></div>
                    {real && <NavLink to={"https://en.wikipedia.org/wiki/Car"} className='home-h2'>Car</NavLink>}
                </div>
            </div>
        </div>
    )
}