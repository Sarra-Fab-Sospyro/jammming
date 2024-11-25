import React from "react";

const SearchBar = ({track})=>{
    return(
        <>
        <form >
            <label htmlFor="searchBar">Search your tracks</label>
            <input id="searchBar" placeholder="search tracks" value={track}/>
            <button></button>
        </form>
        </>
    );
};

export default SearchBar;