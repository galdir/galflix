import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/galflixLogo.png'
import './Menu.css';
import Button from '../Button'
//import ButtonLink from './components/ButtonLink'


function Menu() {
    return (
        //jsx javascript xml
        <nav className="Menu">
            <Link to="/" >
                <img className="Logo" src={Logo} alt="Galflix logo" />
            </Link>

            {/* <a className="ButtonLink" href="/">
                Novo vídeo
            </a> */}
            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo vídeo
            </Button>

            
        </nav>
        
    );
}

export default Menu;