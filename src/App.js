import React, { useState, useRef } from 'react'
import {AlbumForm, AlbumItem, AlbumList, Artist, NavBar, Speaker, Welcome} from './components/index';

import { Routes ,Route } from 'react-router-dom';

const App = (like, setLike) => {
    const divRef = useRef(null);
    
    const scrollToTop = () => {
      divRef.current.scroll({
        top: 0,
        behavior: "smooth"
      });
    };

    const [albums, updateAlbums] = useState([]);

    const addAlbum = (album) => {
        updateAlbums([...albums, album])
    };

    return (
    <>
    <div id="wrap">
        <div id="maindiv" ref={divRef}>
        <NavBar id="navbartop" />
        <button id="scrollbtn" type="button" onClick={() => scrollToTop()}>↑</button>
        <Speaker  />
                <Routes>
                    <Route exact path="/" element={<Welcome />} />
                    <Route exact path="/albums" element={<AlbumList albums={albums} updateAlbums={updateAlbums} />} />
                    <Route exact path="/new" element={<AlbumForm addAlbum={addAlbum}/>}/>
                </Routes>
        </div>
        </div>
    </>
  )
};

export default App;