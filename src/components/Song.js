import React from "react";

const Song = ({ currentSong }) => {
	return (
		<>
			<Img src={currentSong.cover} alt={currentSong.name}></Img>
			<H1>{currentSong.name}</H1>
			<H2>{currentSong.artist}</H2>
		</>
	);
};
export default Song;