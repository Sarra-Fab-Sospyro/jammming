import React from "react";
import Track from "../Track/Track";
import styles from "./Tracklist.module.css";

const Tracklist = ({ tracklist }) => {
	return (
		<div className={styles.tracklist}>
			{tracklist.map((track) => {
				return <Track key={track.id} track={track}/>;
			})}
		</div>
	);
};

export default Tracklist;
