import React, { useState, useEffect } from "react";
import './style.css';
import api from "../../services/api";

const Component = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        api.getVideoList()
            .then(l => {
                console.log('list', l)
                setList(l);
            })
    }, [])

    return (
        <div className="home_container">
            {
                list.map(row => <Card key={row.id} {...row} />)
            }
        </div>
    )
}


const Card = ({ title, imageUrl, userAvatar, date, description }) => {
    return (
        <div className="home_card">
            <img src={imageUrl} alt="imagem" />
            <div className="title_container">
                <img className="avatar" src={userAvatar} alt="avatar" />
                <div className="title_box">
                    <h1>{title}</h1>
                    <h2>Publicado em {date.toLocaleDateString('pt-br')}</h2>
                </div>
            </div>
            <p>{description}</p>
        </div>
    )
}

export default Component