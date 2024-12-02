/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import Tracklist from "../Tracklist/Tracklist";
import styles from "./App.module.css";
const App = () => {
	const [tracklist, setTracklist] = useState([
		{
			title: "Song Title",
			artist: "Artist Name",
			album: "Album Name",
			id: "1",
			img: "/assets/Mic drop-bro.svg",
		},
		{
			title: "Song Title",
			artist: "Artist Name",
			album: "Album Name",
			id: "2",
			img: "/assets/Mic drop-bro.svg",
		},
		{
			title: "Song Title",
			artist: "Artist Name",
			album: "Album Name",
			id: "3",
			img: "/assets/Mic drop-bro.svg",
		},
	]);

	return (
		<div className={styles.main}>
			<SearchBar />
			<Tracklist tracklist={tracklist}/>
		</div>
	);
};

export default App;
