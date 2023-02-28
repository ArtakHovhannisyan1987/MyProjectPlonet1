import {useState, useEffect} from 'react'; //ամեն անգամ երբ գա տեքստ մենք պետք է տեղաորենք փոփոխականի մեջ, դրա համար օգտագործում ենք հուկերը
import {commentDelete} from '../../redux/about/actions';
import {useDispatch} from 'react-redux';
import './SingleComments.css';


function SingleComments({data}){//ամեն կոմենտի համար ատանում ենք text-ը և id
    const [commentTxet, setCommentText] = useState('');
    const {text,id} = data;
    const dispatch = useDispatch();
    
    const handleUpdate = (e)=>{
        e.preventDefault();
        console.log('submit ->>', commentTxet);
    }

    const handleDelete = (e)=>{
        e.preventDefault();
        dispatch(commentDelete(id));
    }

    useEffect(()=>{//ամեն անգամ երբ փոխվի տեքստը այն կավելացվի
        if(text){
            setCommentText(text);
        }
    },[text]);

    const hendleInput = (e)=>{//այսինքն երբ մենք կգրենք ինչոր բան հին կոմենտից հետո այն աֆտոմատ
                              //փոխանցվելու է ընթացիք ստեյթ փոփոխական commentText-ը
         setCommentText(e.target.value);                     
    }

    return (
        <form onSubmit={handleUpdate} className='comment-item'>
            <span onClick={handleDelete} className='comment-item-delete'>X</span>
            <input type={'text'} value={commentTxet} onChange={hendleInput} />
            <input type={'submit'} hidden />
        </form>
    )
}
export default SingleComments;



//երբ մանք գրում ենք կոմենտ այն աֆտոմատ լինում է ռենդեր և ավելանում փոփոխական commentText-ի մեջ

//հիմա ուզում ենք թարմացնել երբ ուզում ենք մեր կոմենտը,
// ուստի ֆորմի մեջ բացում ենք onSubmit ֆունքցիան