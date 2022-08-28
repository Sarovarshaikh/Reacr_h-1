import React from 'react';
import './FnComp.css';

function FnComp(){
    return(
        <div>
            <div className='Fn-div'>
                <h2>This is created using Functional Component</h2>
                <strong className='textOne'>This is done using external Css</strong><br /><br />
                <strong style={{color :'red'}}>This is done using inline Css</strong>
            </div>
        </div>
    )
    
}

export default FnComp;