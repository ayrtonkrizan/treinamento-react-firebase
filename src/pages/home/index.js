import React, { useState } from "react";
import './style.css';

const DEFAULT_LIST = [
    {
        id: 1,
        title: 'Primeiro video',
        imageUrl: 'https://i.ytimg.com/vi/5qap5aO4i9A/hq720_live.jpg?sqp=CNSk7IAG-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA9_zQTcwRMdrMbipT87kXHIxmPCg',
        userAvatar: 'https://yt3.ggpht.com/ytc/AAUvwnjToEFDnQETlCMEOWOaiDNzqDkdhtXI1XgA5DN6vA=s68-c-k-c0x00ffffff-no-rj',
        date: new Date(2021, 1, 10),
        description: "Best design, in addition MacBook Air is just beautiful especially profit. Siri is better than TellMe and Google Voice put together to whom CrackBerry. ICloud but while Apple will only get better whenever Steve Jobs was a genius but also pleasure to use although Jony Ive’s incredible design."
    },
    {
        id: 2,
        title: 'Tempestade BR boladona',
        imageUrl: 'https://siterg.uol.com.br/wp-content/uploads/2020/07/Pabllo-Vittar-no-videoclipe-de-Rajada%CC%83o_cre%CC%81dito-divulgac%CC%A7a%CC%83o-2-450x270.jpg',
        userAvatar: 'https://image.freepik.com/vetores-gratis/modelo-de-design-do-logotipo-do-geek_7492-36.jpg',
        date: new Date(2021, 1, 10),
        description: "Depends at last but generally it feels a little slapdash, soon could be the best Android phone, on the contrary in short, a great phone, personally and it works reasonably well in the beginning is might be better than the iPhone in the end may well be because for that reason we would suggest that you may perhaps possibly want this phone, if it is the sort of phone that you might be looking for."
    },
    {
        id: 3,
        title: 'Como fazer Poção Polissuco',
        imageUrl: 'http://2.bp.blogspot.com/-y7EIszQOQRM/TrHz13ZOxqI/AAAAAAAAAYg/BNMVfvCgCfc/s1600/Chu_Jelly_Bottles.jpg',
        userAvatar: 'https://yt3.ggpht.com/ytc/AAUvwnjToEFDnQETlCMEOWOaiDNzqDkdhtXI1XgA5DN6vA=s68-c-k-c0x00ffffff-no-rj',
        date: new Date(2021, 1, 10),
        description: "Escape is not his plan. I must face him, alone. I want to come with you to Alderaan. There's nothing for me here now. I want to learn the ways of the Force and be a Jedi, like my father before me. What good is a reward if you ain't around to use it? Besides, attacking that battle station ain't my idea of courage. It's more like…suicide."
    },
    {
        id: 4,
        title: 'Show na mansão Stark',
        imageUrl: 'https://www.renderhub.com/renderhub/iron-man-3d-wallpaper/iron-man-3d-wallpaper_3840x2160.jpg',
        userAvatar: 'https://www.clipartmax.com/png/middle/379-3791350_geek-avatar-clipart-geek-avatar-computer-icons-geek-avatar-clipart-geek-avatar.png',
        date: new Date(2021, 1, 10),
        description: "I'm trying not to, kid. I need your help, Luke. She needs your help. I'm getting too old for this sort of thing. Partially, but it also obeys your commands. I care. So, what do you think of her, Han?"
    },
]

const Component = () => {
    const [list, setList] = useState(DEFAULT_LIST);
    
    return (
        <div className="home_container">
            {
                list.map(row=><Card {...row} />)
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