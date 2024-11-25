import React, { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import styles from './App.module.css';
const App = () => {

	return (<div className={styles.main}>
      <SearchBar/>
  </div>);
};

export default App;
