import './Header.css';
import logo from '../animal.webp'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header'> 
            <img src={logo} className='logo' alt='logo'/>
            <h2>Titulo de Pagina 7</h2>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to= '/Page2'>Page2</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;