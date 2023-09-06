import "../Header/header.css"
import Logo from '../logo/logo.senac.png'
import React, { useEffect, useState } from 'react';


function Header() {

const [currentDate, setCurrentDate] = useState('');

useEffect(() => {
    const date = new Date();
    setCurrentDate(date.toLocaleDateString());
}, []);
    return (
    <div className="containerHeader">

            <h1 id="docente"> <img src={Logo} id="logo"/>Àrea do Docente <p id="data">{currentDate}</p></h1>

        </div>
    )
}

export default Header;