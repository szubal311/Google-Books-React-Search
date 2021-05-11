import React from 'react';
import "./style.css";



function Search({handleInputChange, search, handleFormSubmit}) {
    return (
        <form className="search">
        <div className="form-group">          
          <input
            value={search}
            onChange={handleInputChange}
            name="term"        
            type="text"
            list="term"
            className="form-control"
            placeholder="Search for a Book, an Author, or a Topic"
            id="term"
          />
          <br />
          <button type="submit" onClick={handleFormSubmit} className="btn btn-primary">Search</button>
        </div>
      </form>
    );
}

export default Search;