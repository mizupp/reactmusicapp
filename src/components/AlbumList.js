import React, { useState, useEffect } from "react";
import AlbumItem from "./AlbumItem";
// import Album from "./Album";

function AlbumList({ albums, updateAlbums }) {
 
    const [album, setAlbum] = useState([]);

    // useEffect(() => {

    // })

    useEffect(() => {
        async function fetchAlbum() {
            const response = await fetch('https://api.discogs.com/artists/1/releases?page=2&per_page=75');
            const fetchedAlbum = await response.json(response);
        return() => {
            console.log(fetchedAlbum);
            setAlbum(fetchedAlbum);        
        }
    }}, []);
    

    const [initialAlbums, setInitialAlbums] = useState([
        {name: 'Kill-Bill', release: "2022", cover: "https://images.genius.com/ec5545d6bd431f045dc8db673b27546d.1000x1000x1.png"},
        {name: 'Anti-Hero', release: "2022", cover: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Taylor_Swift_-_Anti-Hero.png/220px-Taylor_Swift_-_Anti-Hero.png"},
        {name: 'Calm-Down',release: "2022", cover: "https://cdns-images.dzcdn.net/images/cover/07d4291391724a969f243406cc92be66/500x500.jpg"},
        {name: 'Cuff-It', release: "2022",cover: "https://i1.sndcdn.com/artworks-s0zwEjnKsMB0-0-t500x500.jpg"},
        {name: 'Unholy', release: "2022",cover: "https://upload.wikimedia.org/wikipedia/en/3/38/Sam_Smith_and_Kim_Petras_-_Unholy.png"},
        {name: 'As-it-was',release: "2022", cover: "https://cdn.vox-cdn.com/thumbor/voD9bZmXihe7Xdnjy-VBifrWH5E=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19535833/thumb_clean.jpg"}
    ])

    const renderAlbums = () => initialAlbums.map(album => <AlbumItem album={album} updateAlbums={updateAlbums} />)

    return (
        <div className="album-list">
            {renderAlbums()}
            {albums.map((album) => {
                return <AlbumItem album={album} updateAlbums={updateAlbums} key={album.id} />
            })}
        </div>
    );


}
export default AlbumList;
