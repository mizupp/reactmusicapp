import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({ songs, currentSong, setCurrentSong, audioRef, isPlaying, setSongs, libraryStatus }) => {
	return (
		<LibraryContainer libraryStatus={libraryStatus}>
			<H1>Library</H1>
			<SongContainer>
				{songs.map((song) => (
					<LibrarySong
						song={song}
						songs={songs}
						setCurrentSong={setCurrentSong}
						key={song.id}
						audioRef={audioRef}
						isPlaying={isPlaying}
						setSongs={setSongs}
					/>
				))}
			</SongContainer>
		</LibraryContainer>
	);
};
export default Library;