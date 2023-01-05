import React, { useState } from 'react'
import "./albumform.css"

function AlbumForm({ addAlbum, albums }) {
    const [albumInfo, setAlbumInfo] = useState({
        name: "",
        release: "",
        cover: "",
    });

    const handleChange = (e) => {
        setAlbumInfo({ ...albumInfo, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addAlbum(albumInfo);
        setAlbumInfo([
            ...albums,
            { name: "", release: "", cover: "", id: Math.random() * 1000 }
        ]);
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div>
                    <h3>Add a new Album</h3>
                </div>
                <div>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={albumInfo.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="release"
                        placeholder="Release date"
                        value={albumInfo.release}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        type="img"
                        name="cover"
                        placeholder="Album cover"
                        value={albumInfo.cover}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <br />
                    <button id="albumformbutton">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default AlbumForm;