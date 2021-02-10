import React, { useState, useEffect } from "react";
import './style.css';
import api from "../../services/api";

const Component = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        api
            .getVideoList()
            .then(l => {
                setList(l);
            })
    }, []);

    const handlerDelete = (id) => {
        api.deleteVideo(id);
        setList(list.filter(l => l.id !== id))
    }

    return (
        <div className="home_container">
            {
                list.map(row => <Card key={row.id} {...row} handlerDelete={handlerDelete} />)
            }
        </div>
    )
}


const Card = ({ title, imageUrl, id, userAvatar, date, description, handlerDelete }) => {

    return (
        <div className="home_card">
            <img src={imageUrl} alt="imagem" />
            <div className="title_container">
                <img className="avatar" src={userAvatar} alt="avatar" />
                <div className="title_box">
                    <h1>{title}</h1>
                    <h2>Publicado em {date.toLocaleDateString('pt-br')}</h2>
                </div>
                <img src="/images/dump.svg" className="trash_icon" onClick={() => handlerDelete(id)} alt="deletar video" />
            </div>
            <p>{description}</p>
        </div>
    )
}

export default Component