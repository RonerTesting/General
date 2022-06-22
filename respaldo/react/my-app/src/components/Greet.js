import React from "react";

// function Greet (){
//     return <h1>Hello Roner</h1>
// }

const Greet = (props)=> {

    return (
        <div className="xd">
            <h1>Hello {props.name} xd</h1>
            {props.children}
        </div>
    )

}


export default Greet;