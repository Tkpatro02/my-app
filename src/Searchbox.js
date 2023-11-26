import React from 'react';

const SearchBar = () => {
  return (
    <div className="input-group" >
      <div className="form-outline">
        <input type="search" id="form1" className="form-control" placeholder="search here"/>
        <label className="form-label" htmlFor="form1">Search</label>
      </div>
      
    </div>
  );
};

export default SearchBar;
