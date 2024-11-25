import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const SearchBar = ({track})=>{
    const search = <FontAwesomeIcon icon={faSearch}/>;
    return(
        <>
        <form id="form" >
            <label htmlFor="searchBar">Search your tracks</label>
            <input id="searchBar" placeholder="search tracks" value={track}/>
            <button>{search}</button>
        </form>
        </>
    );
};

export default SearchBar;