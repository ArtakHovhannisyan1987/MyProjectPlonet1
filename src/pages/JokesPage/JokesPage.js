import React, {useState} from 'react';
import "./JokesPage.css";
import axios from "axios";



export default function Jokes () {
    const [conut, SetConut] = useState([]);
    const Click = async () => {
        const MyConut = await axios.get(`https://api.chucknorris.io/jokes/random`);
        try{
            if(conut.length == 5){
                conut.shift()
            }
            SetConut((Art) =>{
                const MyArt = [...Art, MyConut.data.value];
                return MyArt
            })
        }catch(error){
            console.log(error);
        }
        console.log(MyConut);
    }
    const MyArt = conut.map((e,i) =>{
        return <div className='jok_2' key={i}>{e}</div>
    })

    return(
        <div className='jok'>
              <div className='but_1'>
                <button className='but_2' onClick={Click}>Click</button>
            </div>
            <div className='jok_1'>
                <div>{MyArt}</div>
            </div>
        </div>
    )
}