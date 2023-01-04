import React, {useState} from 'react';
const Song = () => {
    const [pk, setSong] = useState([
        {name: 'Kill-Bill', rd: "2022", img: "https://images.genius.com/ec5545d6bd431f045dc8db673b27546d.1000x1000x1.png"},
        {name: 'Anti-Hero', rd: "2022", img: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Taylor_Swift_-_Anti-Hero.png/220px-Taylor_Swift_-_Anti-Hero.png"},
        {name: 'Calm-Down',rd: "2022", img: "https://cdns-images.dzcdn.net/images/cover/07d4291391724a969f243406cc92be66/500x500.jpg"},
        {name: 'Cuff-It', rd: "2022",img: "https://i1.sndcdn.com/artworks-s0zwEjnKsMB0-0-t500x500.jpg"},
        {name: 'Unholy', rd: "2022",img: "https://upload.wikimedia.org/wikipedia/en/3/38/Sam_Smith_and_Kim_Petras_-_Unholy.png"},
        {name: 'As-it-was',rd: "01-2022", img: "https://cdn.vox-cdn.com/thumbor/voD9bZmXihe7Xdnjy-VBifrWH5E=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19535833/thumb_clean.jpg"}
    ])

    const renderRows = () => {
        return pk.map(p => <tr><td>{p.name}</td><td>{p.rd}</td><td><img style={{width:"100px",height:"100px"}} src={p.img}></img></td></tr>)
    }

    return(
        <>
        <table style={{ border:"1px solid black", width: "100vw", textAlign: "center"}}>
        <thead>
        <tr>
        <th>Name</th>
        <th>Image</th>
        </tr>
        </thead>
        <tbody>
            {renderRows()}
        </tbody>
        
        </table>
           
        </>
    );
};

export default Song;
