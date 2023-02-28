import React from "react";
import { NavLink } from "react-router-dom";
import "./Menu.css";


export default function Menu(){
    const MenuName =[
        {
            id:1,
            to:'/Home',
            name:'Home'
        },
        {
            id:2,
            to:'/About',
            name:'About'
        },
        {
            id:3,
            to:'/Contact',
            name:'Contact'
        },
        {
            id:4,
            to:'/Jokes',
            name:'Jokes'
        },
        {
            id:5,
            to:'/Register',
            name:'Register'
        }
    ];

    return(
        <div id="nav">
            <ul className="ul">
                {MenuName.map((e)=>(
                    <NavLink key={e.id} to={e.to} className={({isActive})=>(isActive ? "li1" : "li2")}>{e.name}</NavLink>
                ))}
            </ul>
        </div>
    )
};






// export default function Menu (){
//     return (
//         <div id="nav">
//             <ul className="ul">
//                 <NavLink to='/Home' className={({isActive})=>(isActive ? "li1" : "li2")}><li className="li1 li2">Home</li></NavLink>
//                 <NavLink to='/About' className={({isActive})=>(isActive ? "li1" : "li2")}><li className="li1 li2">About</li></NavLink>
//                 <NavLink to='Contact' className={({isActive})=>(isActive ? "li1" : "li2")}><li  className="li1 li2">Contact</li></NavLink>
//                 <NavLink to='Jokes' className={({isActive})=>(isActive ? "li1" : "li2")}><li  className="li1 li2">Jokes</li></NavLink>
//                 <NavLink to='Register' className={({isActive})=>(isActive ? "li1" : "li2")}><li  className="li1 li2">Register</li></NavLink>
//             </ul>

//         </div>
//     )
// }