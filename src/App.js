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

import React, { useState } from 'react'
import Artist from "./components/Artist";
import AlbumForm from './components/AlbumForm';
import AlbumList from "./components/AlbumList";

const App = (like, setLike) => {

    const [albums, updateAlbums] = useState([]);

    const addAlbum = (album) => {
        updateAlbums([...albums, album])
    };

    return (<div>
        <h1>Music Site</h1>
        <Artist name="Random Artists Spotify" genre="Mix" intro="This is a really cool website where you can like stuff." />
        <AlbumList albums={albums} updateAlbums={updateAlbums} />
        <AlbumForm addAlbum={addAlbum} />
    </div>)
};

export default App;