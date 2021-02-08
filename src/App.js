import React, { useState } from 'react';
import Home from "./pages/home";
import Menu from "./pages/menu";

const MENU_LIST = [
  { id: 'videoList', title: 'Lista de Videos' },
  { id: 'newVideo', title: 'Novo Video' },
]

function App() {
  const [menuId, setMenuId] = useState(MENU_LIST[1].id);

  const handlerMenuSelect = (evnt) => {
    setMenuId(evnt.target.id);
  }
  return (
    <div className="container">
      <Menu list={MENU_LIST} clickMenu={handlerMenuSelect} />
      {
        menuId === 'videoList'
          ? <Home />
          : <h1>Pagina de cadastro</h1>
      }
    </div>
  )
}

export default App;