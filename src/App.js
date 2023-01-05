import React, { useState } from 'react'
import Artist from "./components/Artist";
import AlbumForm from './components/AlbumForm';
import AlbumList from "./components/AlbumList";
import Navbar from "./components/NavBar";
import Welcome from "./components/Welcome";
import Speaker from "./components/Speaker";

import { Routes ,Route } from 'react-router-dom';

const App = (like, setLike) => {

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

