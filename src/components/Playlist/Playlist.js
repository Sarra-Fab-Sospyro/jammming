import React from "react";
import styles from "../Playlist/Playlist.module.css";

const Playlist = ({ playlist, removeTrackFromPlaylist }) => {
	return (
		<div className={styles.containerPlayList}>
			<h1>Your Playlist:</h1>
			{playlist.map((track, index) => (
				<div className={styles.list} key={index}>
					<h2>{track.name}</h2>
					<p>{track.artist}</p>
					<p>{track.album}</p>
					<img className={styles.image} src={track.img} alt={track.name} />
					<button
						className={styles.button}
						onClick={() => removeTrackFromPlaylist(index)}
					>
						<i className="fa-solid fa-minus"> </i>
					</button>
				</div>
			))}
		</div>
	);
};

export default Playlist;
