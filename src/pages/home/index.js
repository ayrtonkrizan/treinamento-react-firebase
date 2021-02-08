import React from "react";
import './style.css';

export default () => {
    return (
        <div className="home_container">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}


const Card = () => {
    return (
        <div className="home_card">
            <img src="https://i.ytimg.com/vi/5qap5aO4i9A/hq720_live.jpg?sqp=CNSk7IAG-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA9_zQTcwRMdrMbipT87kXHIxmPCg" alt="imagem" />
            <div className="title_container">
                <img className="avatar" src="https://yt3.ggpht.com/ytc/AAUvwnjToEFDnQETlCMEOWOaiDNzqDkdhtXI1XgA5DN6vA=s68-c-k-c0x00ffffff-no-rj" alt="avatar" />
                <h3>Titulo do post</h3>
            </div>
        </div>
    )
}