import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import  styles from './SearchBar.module.css';
const SearchBar = ({ track }) => {
	const search = <FontAwesomeIcon icon={faSearch} />;
	return (
		<div className={styles.mainDiv}>
			<form id="form">
				<label htmlFor="searchBar">Search your tracks</label>
				<div>
					<input id={styles.searchBar} type="text" placeholder="search tracks" value={track} />
					<button className={styles.button}>Search {search}</button>
				</div>
			</form>
		</div>
	);
};

export default SearchBar;
