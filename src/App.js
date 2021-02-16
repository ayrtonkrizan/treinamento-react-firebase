import React, { useState } from 'react';
import Home from "./pages/home";
import Menu from "./pages/menu";
import Form from "./pages/form";
import Login from "./pages/login";

const MENU_LIST = [
  { id: 'videoList', title: 'Lista de Videos', form: Home },
  { id: 'newVideo', title: 'Novo Video', form: Form },
  { id: 'login', title: 'Login', form: Login },
]

function App() {
  const [menuId, setMenuId] = useState(MENU_LIST[0].id);

  const handlerMenuSelect = (evnt) => {
    setMenuId(evnt.target.id);
  }

  const Page = (MENU_LIST.find(m => m.id === menuId) || MENU_LIST[0]).form;
  return (
    <div className="container">
      <Menu list={MENU_LIST} clickMenu={handlerMenuSelect} />
      <Page />
    </div>
  )
}

export default App;