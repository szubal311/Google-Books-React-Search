import React from 'react'

function Form (props) {
    return(
    <div className="form-group">
        <input className="form-control" {...props}/>
    </div>
    );

}

export default Form;