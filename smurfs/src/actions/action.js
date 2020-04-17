import axios from 'axios';

export const FETCH_DATA_START ="FETCH_DATA_START";
export const FETCH_DATA_SUCCESS ="FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE ="FETCH_DATA_FAILURE";

export const POST_DATA_START ="POST_DATA_START";
export const POST_DATA_SUCCESS ="POST_DATA_SUCCESS";
export const POST_DATA_FAILURE ="POST_DATA_FAILURE";

export const DELETE_SMURF ="DELETE_SMURF";

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

export const addSmurf = addedSmurf =>dispatch=>{
    dispatch({type: POST_DATA_START});

    axios.post("http://localhost:3333/smurfs", addedSmurf)
    .then(res=>{
        console.log("post data returned", res);
        dispatch({type: POST_DATA_SUCCESS, payload: res.data});
    })
    .catch(err=>{
        console.log('post data failed to return', err);
        dispatch({type: POST_DATA_FAILURE, payload: err })
    })
};

//attempting stretch


export const DELETE_SMURF_START ='DELETE_SMURF_START';

export const DELETE_SMURF_SUCCESS ='DELETE_SMURF_SUCCESS';
export const DELETE_SMURF_FAIL ='DELETE_SMURF_FAIL';

export const removeSmurf = id =>{
    return dispatch=>{
        axios.delete(`http://localhost:3333/smurfs${id}`)
        .then(res =>{
            dispatch({type:DELETE_SMURF_SUCCESS, payload: res.data })
        })
        .catch(err=>{
            dispatch({type:DELETE_SMURF_FAIL, payload: err.response })
        });
    };
}