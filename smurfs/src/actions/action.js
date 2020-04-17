import axios from 'axios';

export const FETCH_DATA_START ="FETCH_DATA_START";
export const FETCH_DATA_SUCCESS ="FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE ="FETCH_DATA_FAILURE";

export const POST_DATA_START ="POST_DATA_START";
export const POST_DATA_SUCCESS ="POST_DATA_SUCCESS";
export const POST_DATA_FAILURE ="POST_DATA_FAILURE";

export const fetchSmurfs = () =>dispatch=>{
    dispatch({type: FETCH_DATA_START});

    axios.get ("http://localhost:3333/smurfs")
    .then(res=>{
        dispatch({type: FETCH_DATA_SUCCESS, payload: res.data})
    })
    .catch(err=>{
        console.log("data failed to return", err.response);
        dispatch({
            type: FETCH_DATA_FAILURE,
            payload: `Error: ${err.response.status} ${err.response.data}`
        });
    });
}

export const addSmurf = newSmurf =>dispatch=>{
    dispatch({type: POST_DATA_START});

    axios.post("http://localhost:3333/smurfs")
    .then(res=>{
        console.log("post data returned", res);
        dispatch({type: POST_DATA_SUCCESS, payload: res.data});
    })
    .catch(err=>{
        console.log('post data failed to return', err);
        dispatch({type: POST_DATA_FAILURE, payload: err })
    })
};