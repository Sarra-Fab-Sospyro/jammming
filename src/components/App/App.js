import React, { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import Track from "../Track/Track";
import styles from "./App.module.css";
const App = () => {

	const [track, setTrack] = useState({
		title: "Song Title",
		artist: "Artist Name",
		album: "Album Name",
		id: "1",
    img: "/assets/Mic drop-bro.svg"
	});

	return (
		<div className={styles.main}>
			<SearchBar />
			<Track track={track} />
		</div>
	);
};

export default App;
