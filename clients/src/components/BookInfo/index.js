import React from 'react'

function BookInfo(props) {
    return (
        <span>
            <div className="row" style={{maginBottom: 15}}>
                <div className="col-8">
                    <h4 className="card-title">
                        {props.title}
                    </h4>
                    <h5 className="card-subtitle mb-3 text-muted">
                        {props.author}
                    </h5>
                </div>
                <div className="col-4 link">
                    <a href={props.link} target="blank"
                        className="btn btn-primary"> View
                    </a>
                    <button onClick={handleSave} className="btn btn-primary save-btn">Save</button>
                </div>
            </div>
            <div className="row">
                <div className="col-2 text-center">
                    <img src={props.image} alt="..." className="img-thumbnail"/>
                </div>
                <div className="col-10">
                    <p className="card-text">
                        {props.description}
                    </p>
                </div>
            </div>
        </span>
    );   
  
}

export default BookInfo;