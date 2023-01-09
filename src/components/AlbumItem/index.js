import React, { useState } from 'react'

function AlbumItem({ album, updateAlbums }) {
    const [like, setLike] = useState(false);

    return (
        <div className="card" key={album.id}>
            <img id="albumimg" src={album.cover}></img>
            <div className="card-info">
                <h3 className="card-name">{album.name}</h3>
                <em>Release date: {album.release}</em>
                <br/><br/>
                <button id="playbutton">&#9658;</button>
                <button id="likebutton" onClick={() => setLike((prevState) => !prevState)}>{like ? "❤️" : " 💚 "}</button>
            </div>
        </div>
    )
}
export default AlbumItem;