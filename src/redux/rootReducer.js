import {combineReducers} from "redux";//սրանով մենք միացնում ենք բոլոր ռեդյուսերները մեր կոմպոնենտների 
import { likesReducer } from "./about/reducer";


const rootReducer = combineReducers({//այստեղ մենք գրելու ենք բոլոր մեր ռեդուսերները
    likes: likesReducer,
    text: likesReducer,
    comments: likesReducer
})

export default rootReducer;