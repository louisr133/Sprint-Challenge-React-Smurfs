import React from "react";


const SmurfPage = (props) => {
    let id = props.match.params.id;
    let smurf = props.smurfs.find(s => `${s.id}`=== id)

    if(smurf === undefined || smurf === null){
        return <div>LOADING....</div>
    }
    return(
        
        <div className="">
                <h1>{smurf.name}</h1>
                <h4>{smurf.age}</h4>
                <p>{smurf.height}</p> 
        </div>
    )
}

export default SmurfPage;