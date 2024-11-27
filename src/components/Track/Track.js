import React from "react";
import styles from "./Track.module.css";
const Track = ({ track }) => {
	if (!track) {
		// Handle case where track is undefined or null
		return <p>Loading track...</p>;
	}
	return (
		<>
			<div className={styles.card}>
				<img className={styles.image} src={track.img} alt="track's img" />
				<div className={styles.container}>
					<h1>
						<b>{track.title}</b>
					</h1>
					<h3>
						<em>{track.album}</em>
					</h3>
					<p>by {track.artist}</p>
				</div>
			</div>
		</>
	);
};

export default Track;
