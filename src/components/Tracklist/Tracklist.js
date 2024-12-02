import React from "react";
import Track from "../Track/Track";
import styles from "./Tracklist.module.css";

const Tracklist = ({ tracklist }) => {
	return (
		<div className={styles.tracklist}>
			{tracklist.map((track) => (
				<li key={track.id} className={styles.listItem}>
					<Track track={track} />
				</li>
			))}
		</div>
	);
};

export default Tracklist;
