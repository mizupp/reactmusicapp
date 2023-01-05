import React, { useState } from 'react'

function AlbumItem({ album, updateAlbums }) {
    const [like, setLike] = useState(false);

    function handleDelete() {
        console.log("delete");
        updateAlbums(prevAlbums => prevAlbums.filter((el) => album.id !== el.id))
    }

    return (
        <div className="card" key={album.id}>
            <img style={{ width: 150 ,height: 150 }} src={album.cover}></img>
            <div className="card-info">
                <h3 className="card-name">{album.name}</h3>
                <em>Release date: {album.release}</em>
                <br/><br/>
                {/* <button style={{ width: 150 }} onClick={handleDelete} className="trash-btn">Delete</button> */}
                <button id="playbutton">&#9658;</button>
                <button id="likebutton" onClick={() => setLike((prevState) => !prevState)}>{like ? "❤️" : " 💛 "}</button>
            </div>
        </div>
    )
}
export default AlbumItem;