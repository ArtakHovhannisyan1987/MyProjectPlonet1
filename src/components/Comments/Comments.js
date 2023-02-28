import {useState} from 'react';//որպեսզի ստանանք դեֆոլդ վիճակ
import SingleComments from '../SingleComments/SingleComments';//իմպորտ անելուց հետո մեր կոմպոնենտը տեղապոխվում ենք app.js
import {commentCreate} from '../../redux/about/actions';
import {useDispatch, useSelector} from 'react-redux';
import uniqid from 'uniqid';
import './Comments.css';



function Comments(){
    const [textComment, setTextComment] = useState('');
    const comments = useSelector(state  =>{
        const {comments} = state;
        return comments.comments
    });
    const dispatch = useDispatch()
    const handeleInput = (e)=>{
        setTextComment(e.target.value)
    }
    const handeleSubmit = (e)=>{
        e.preventDefault()
        const id = uniqid()
        dispatch(commentCreate(textComment, id))
        setTextComment(e.target.value = '')
    }

    return(
        <div className='card-comments'>
            <form onSubmit={handeleSubmit} className="comment-item-create">
                <input type="text" className='card-input' value={textComment} onChange={handeleInput}/>
                <input type={"submit"} hidden />
            </form>
            {!!comments?.length && comments?.map(res =>{
                return <SingleComments key={res.id} data={res}/>
            })}
        </div>
    )
}
export default Comments;



//value-ին տալիս ենք սկզբնական արժեքը
//handeleSubmit-ում dispatch ենք անում մեր էքշնը և փոխանցում տվյալները, դրանք են հենց քւմենթները և id
// input-ներից հետո ավելացնում ենք մեր կոմենտները, որպեսզի տեսնենք էկրանին
// այնուհետև գնում ենք SingleComment render ենք անում մի առանձին կոմենտը 
