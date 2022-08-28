import React from "react";
import './ClassComp.css'


class ClassComp extends React.Component{
    
    
    render(){
        return(
            <div className='Class-div'>
                <h2>This is created using Class Component</h2>
                <strong className='textTwo'>This is done using external Css</strong><br /><br />
                <strong style={{color :'red'}}>This is done using inline Css</strong>
            </div>
        )
    }
}

export default ClassComp;