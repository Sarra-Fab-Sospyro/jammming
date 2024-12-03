import React from "react";
import Track from "../Track/Track";
import styles from "./Tracklist.module.css";


const Tracklist = ({ tracklist, addTrackToPlaylist }) => {
	return (
		<div className={styles.containerTracklist}>
			<h1>Tracks found:</h1>
			{tracklist.map((track) => (
				<div key={track.id} className={styles.list}>
					<Track track={track} />
					<button
						className={styles.button}
						onClick={() => addTrackToPlaylist(track)}
					>
						<i className="fa-solid fa-plus"> </i>
					</button>
				</div>
			))}
		</div>
	);
};

export default Tracklist;
