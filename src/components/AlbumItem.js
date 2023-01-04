import React, { useState } from 'react'

function AlbumItem({ album, updateAlbums }) {
    const [like, setLike] = useState(false);

    function handleDelete() {
        console.log("delete");
        updateAlbums(prevAlbums => prevAlbums.filter((el) => album.id !== el.id))
    }

    return (
        <div className="card" key={album.id}>
            <h3 className="card-name">{album.name}</h3>
            <em>Release date: {album.release}</em>
            <br></br>
            <img style={{ width: 300 }} src={album.cover}></img>
            <br></br>
            {/* <button style={{ width: 150 }} onClick={handleDelete} className="trash-btn">Delete</button> */}
            <br></br>
            <button onClick={() => setLike((prevState) => !prevState)}>{like ? "❤️" : " 💛 "}</button>
        </div>
    )
}
export default AlbumItem;