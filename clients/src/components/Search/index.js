import React from 'react'

function Search(props) {
    return (
        <form className="search">
        <div className="form-group">          
          <input
            value={props.value}
            onChange={props.handleInputChange}
            name="title"        
            type="text"
            className="form-control"
            placeholder="Search for a Book, an Author, or a Topic"
            id="title"
          />
          <br />
          <button onClick={props.handleFormSubmit} className="btn btn-primary">Search</button>
        </div>
      </form>
    );
}

export default Search;