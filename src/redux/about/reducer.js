import { INCREMENT, DECREMENT, INPUT_TEXT, COMMENT_CREATE, COMMENT_DELETE } from "./types";


const initialState = {
    likes: 0,
    text: "",
    comments: []
}

export const likesReducer = (state = initialState, action) => {//ցանկացած Reducer ընդունում է state և action վերադրձնում է state

    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                likes: state.likes + 1
            }
        case DECREMENT:
            return {
                ...state,
                likes: state.likes - 1
            }
        case INPUT_TEXT:
            return {
                ...state, //կատարում ենք վիճակի կոպիյան
                text: action.text,
            }
        case COMMENT_CREATE:
            return {
                ...state,
                comments: [...state.comments, action.data]
            }
        case COMMENT_DELETE:
            return (() => {
                const { id } = action;
                const { comments } = state;
                const itemIndex = comments.findIndex((rex) => rex.id === id);


                const nextComments = [
                    ...comments.slice(0, itemIndex),
                    ...comments.slice(itemIndex + 1)
                ];
                return {
                    ...state,
                    comments: nextComments
                }
            })();
        default:
            return state;

    }
};