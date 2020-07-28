import React from 'react';
import Logo from '../../assets/img/galflixLogo.png'
import './Menu.css';
import Button from '../Button'
//import ButtonLink from './components/ButtonLink'


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
            <Button as="a" className="ButtonLink" href="/">
                Novo vídeo
            </Button>

            
        </nav>
        
    );
}

export default Menu;