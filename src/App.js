import React, { useState, useRef } from 'react'
import Artist from "./components/Artist";
import AlbumForm from './components/AlbumForm';
import AlbumList from "./components/AlbumList";
import Navbar from "./components/NavBar";
import Welcome from "./components/Welcome";
import Speaker from "./components/Speaker";
import Library from "./components/Library";
import LibrarySong from './components/LibrarySong';
import Player from "./components/Player"
import Song from "./components/Song"
import data from "./data";

import { Routes ,Route } from 'react-router-dom';

const App = (like, setLike) => {
	// Ref
	const audioRef = useRef(null);

	// State
	const [songs, setSongs] = useState(data());
	const [currentSong, setCurrentSong] = useState(songs[0]);
	const [isPlaying, setIsPlaying] = useState(false);
	const [libraryStatus, setLibraryStatus] = useState(false);
	const [songInfo, setSongInfo] = useState({
		currentTime: 0,
		duration: 0,
	});

	// Functions
	const updateTimeHandler = (e) => {
		const currentTime = e.target.currentTime;
		const duration = e.target.duration;
		setSongInfo({ ...songInfo, currentTime, duration });
	};

	const songEndHandler = async () => {
		let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
		let nextSong = songs[(currentIndex + 1) % songs.length];
		await setCurrentSong(nextSong);

		const newSongs = songs.map((song) => {
			if (song.id === nextSong.id) {
				return {
					...song,
					active: true,
				};
			} else {
				return {
					...song,
					active: false,
				};
			}
		});
		setSongs(newSongs);

		if (isPlaying) {
			audioRef.current.play();
		}
	};

// const AppContainer = styled.div`
// 	transition: all 0.5s ease;
// 	margin-left: ${(p) => (p.libraryStatus ? "20rem" : "0")};
// 	@media screen and (max-width: 768px) {
// 		margin-left: 0;
// 	}
// `;




    const [albums, updateAlbums] = useState([]);
    const addAlbum = (album) => {
        updateAlbums([...albums, album])
    };
    return (
    <>
       {/* <div class="speaker2" > </div> */}

    <div id="maindiv">

    <Speaker />
    <Navbar id="navbartop" />
            <Routes>
                <Route exact path="/" element={<Welcome />} />
                <Route exact path="/albums" element={<AlbumList albums={albums} updateAlbums={updateAlbums} />} />
                <Route exact path="/new" element={<AlbumForm addAlbum={addAlbum}/>}/>
            </Routes>
    <div>
        {/* <Artist name="Random Artists Spotify" genre="Mix" intro="This is a really cool website where you can like stuff." /> */}
        {/* <AlbumList albums={albums} updateAlbums={updateAlbums} /> */}
    </div>
    </div>

    <div libraryStatus={libraryStatus}>
			<Song currentSong={currentSong} />
			<Player
				isPlaying={isPlaying}
				setIsPlaying={setIsPlaying}
				currentSong={currentSong}
				setCurrentSong={setCurrentSong}
				audioRef={audioRef}
				songInfo={songInfo}
				setSongInfo={setSongInfo}
				songs={songs}
				setSongs={setSongs}
			/>
			<Library
				songs={songs}
				setCurrentSong={setCurrentSong}
				audioRef={audioRef}
				isPlaying={isPlaying}
				setSongs={setSongs}
				libraryStatus={libraryStatus}
			/>
			<audio
				onLoadedMetadata={updateTimeHandler}
				onTimeUpdate={updateTimeHandler}
				onEnded={songEndHandler}
				ref={audioRef}
				src={currentSong.audio}
			/>
		</div>
    </>
  )
  
};

export default App;

// import React from 'react';
// import Song from './components/Song';
// import Artist from "./components/Artist";
// import './App.css';
// // import './components/MusicPlayer';

// const App = () => {
//     return(
//         <>
//         {/* <div className="container" >
// 			<Header/>
// 			<Container/>
// 		</div> */}
//         <Artist />
//         <Song />
//         </>
//     );
// }

// // ReactDOM.render(<Index />, document.getElementById("root"));
// export default App;

