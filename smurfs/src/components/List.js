import React, { useEffect } from 'react';
import {connect, useDispatch} from 'react-redux';

import {fetchSmurfs, addSmurf, removeSmurf} from '../actions/action';
import Form from './Form';

const List = props =>{
    const smurfProps = props.fetchSmurfs;

    useEffect(()=>{smurfProps()}, [smurfProps]);

    const dispatch = useDispatch(); 

    const handleDelete =e =>{
        e.preventDefault();
        dispatch(removeSmurf(e.target.value))    
    }

    // const handleDelete = e=>{
    //     e.preventDefault();
    //     props.removeSmurf({id: e.target.value})
    // }

    return(
        <div>
            <div className ="list">
                {props.smurf.map(smurf=>(
                    <div className ="individualSmurf" key ={smurf.id}>
                        <p>Name: {smurf.name}</p>
                        <p>Age: {smurf.age}</p>
                        <p>Height: {smurf.height}</p>

                        <button className ="delete" 
                        onClick ={handleDelete} value ={smurf.id}>Remove {smurf.name} Smurf</button>
                    </div>
                ))}
            </div>
            <Form addSmurf ={props.addSmurf}/>
        </div>
    )

}//end of List component


const mapStateToProps = state =>{
    return({
        smurf: state.smurf,
        error: state.error
    })
}

export default connect (mapStateToProps, {fetchSmurfs, addSmurf}) (List);