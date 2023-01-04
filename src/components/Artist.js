import React, { useState } from 'react'

const Artist = ({ name, genre, intro }) => {

    return (
        <div>
            <h2>{name}</h2>
            <em id='genre'>{genre}</em>
            <p>{intro}</p>
        </div>
    )
};

export default Artist;

// import React, {useState} from 'react';

// const Song = 0;
// //Their name, music type and an introduction paragraph.
// //A list of their songs/albums including name,release date and cover art.

// const Artist = () => {
//     const [artistName, setArtistName] = useState("Jazzy");
//     const [songCaught, setSongCaught] = useState(2);
//     const [artistPara, setArtistPara] = useState("This is an introduction about an awesome artist");
//     const [artistType, setArtistType] = useState("Pop");

//     const increaseSong = () => setSongCaught(songCaught + 1);
//     return (
//         <>
//           <h2>Top Song Artists Today</h2>
//           <h3>Artist Name: {artistName}</h3>
//           <h3>Description: {artistPara}</h3>
//           <h3>Music Type: {artistType}</h3>

//           <h3>Song Likes: {songCaught}</h3>
//           <button class="wow" onClick={increaseSong}>I Like This Song</button>
//           <div class='large-font text-center top-20'>
//           <ion-icon name="heart">
//           <div class='red-bg'>Like</div>
//           </ion-icon>
//           </div>

//           <br /> <br /> 
//         </>
//     );
// }

// export default Artist;
