import React from 'react';
import Logo from '../../assets/img/galflixLogo.png'
import './Menu.css';
import ButtonLink from './components/ButtonLink'


function Menu() {
    return (
        //jsx javascript xml
        <nav className="Menu">
            <a href="/" >
                <img className="Logo" src={Logo} alt="Galflix logo" />
            </a>

            {/* <a className="ButtonLink" href="/">
                Novo vídeo
            </a> */}
            <ButtonLink className="ButtonLink" href="/">
                Novo vídeo
            </ButtonLink>

            
        </nav>
        
    );
}

export default Menu;