/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";

import Tracklist from "../Tracklist/Tracklist";
import styles from "./App.module.css";
import Playlist from "../Playlist/Playlist";
const App = () => {
	const [tracklist, setTracklist] = useState([
		{
			name: "Song name 1",
			artist: "Artist Name",
			album: "Album Name",
			id: "1",
			img: "/assets/Mic drop-bro.svg",
		},
		{
			name: "Song name 2",
			artist: "Artist Name",
			album: "Album Name",
			id: "2",
			img: "/assets/Mic drop-bro.svg",
		},
		{
			name: "Song name 3",
			artist: "Artist Name",
			album: "Album Name",
			id: "3",
			img: "/assets/Mic drop-bro.svg",
		},
	]);

	const [playlist, setPlaylist] = useState([]);

	const addTrackToPlaylist = (track) => {
		// if (!playlist.some((trackChecked) => trackChecked.id === track.id))
			setPlaylist([...playlist, track]);
	};

	const removeTrackFromPlaylist = (index) => {
		setPlaylist((prevPlaylist) =>
			prevPlaylist.filter((_, i) => i !== index)
		);
	};
	

	return (
		<div className={styles.main}>
			<SearchBar />
			<div className={styles.container}>
				<Tracklist
					tracklist={tracklist}
					addTrackToPlaylist={addTrackToPlaylist}
				/>
				<Playlist
					playlist={playlist}
					removeTrackFromPlaylist={removeTrackFromPlaylist}
				/>
			</div>
		</div>
	);
};

export default App;
