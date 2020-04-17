
import {
    FETCH_DATA_START,FETCH_DATA_SUCCESS,FETCH_DATA_FAILURE,
    POST_DATA_START,POST_DATA_SUCCESS,POST_DATA_FAILURE,
    DELETE_SMURF_START,DELETE_SMURF_SUCCESS, DELETE_SMURF_FAIL
} from '../actions/action';


const initialState ={
    smurf: [],
    isFetching: false,
    error: '',
    removingSmurf: false
}

const reducer = (state =initialState, action)=>{
    switch(action.type){
        case FETCH_DATA_START:
            return{
                ...state, error: '', isFetching: true};
        case FETCH_DATA_SUCCESS:
            return{
                ...state, error: '', isFetching:false, smurf: action.payload};
        case FETCH_DATA_FAILURE:
            return{
                ...state, error: action.payload, isFetching: false};
        

        case POST_DATA_START:
            return{
                ...state, isFetching: true};
        case POST_DATA_SUCCESS:
            return{
                ...state, smurf: action.payload, isFetching: false};
        case POST_DATA_FAILURE:
            return{
                ...state, isFetching: false, error: action.payload};
        
        case DELETE_SMURF_START :
            return{
                ...state, removingSmurf: true, error: ''};
        
        case DELETE_SMURF_SUCCESS:
            return{
                ...state, smurf: action.payload, removingSmurf: false, error: ''};
        
        case DELETE_SMURF_FAIL:
            return{
                ...state, removingSmurf: false, error: action.payload};

        default: 
            return state; 
    }
}

export default reducer; 