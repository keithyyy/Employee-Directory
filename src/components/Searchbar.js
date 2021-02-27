import React from "react"

const SearchBar = (props) => {
    return (
        <div className="col-12 form-control mb-2 searchbar">
            <input type="text" 
            value={props.value} 
            onChange={props.handleInputChange}
            placeholder="Find an Employee"/>


            <div className="btn btn-success col-3 ml-3" onClick={props.changeButtonText}>Search</div>
        
        </div>

        
    )
}

export default SearchBar;