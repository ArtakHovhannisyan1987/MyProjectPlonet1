import { useDispatch, useSelector} from "react-redux"; // useDispatch ayn ogtagorcvelu e mapDispatchToProps funkciayi poxaren
                                                      //useSelector ogtagorcvelu enq mapStateToprops funkciayi poxaren
import {inputText} from '../../redux/about/actions';
import "./Title.css";

function Title(props){
    console.log('props title', props);
    const newText = useSelector(state => {
       const {text} = state;
       return text.text
    });
    const dispatch = useDispatch();

    const handleChange = (e) =>{
        dispatch(inputText(e.target.value))// mer text reduurin poxancelu hamar
    }

    return (
        <div className="card-title">
            <div className="card-titel-top">
                <input className="inputtitel" type='text' onChange={handleChange}/>
            </div>
            <p>{newText}</p>
        </div>
    )
}
export default Title



//ogtagorcelov erku huker integrecinq pahestain redaqsi
//huker ogtagorcelov arden chenq ogtagorcum funqcia conect -@
