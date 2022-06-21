import { Link } from "react-router-dom";

const Header = (props) => {
    return (
        <header className="header">
            <a href="index.html" className="logo"><img src="Imagenes/Logo irridelta2.jpeg" alt="Logo Irridelta" /></a>

            <nav className="menu">
                <div>
                    <ul>
                        <li className="activo"><Link to="/">Inicio</Link></li>
                        <li><Link to="/nosotros">Nosotros</Link></li>
                        <li><Link to="/productos">Productos</Link></li>
                        <li><Link to="/contacto">Contacto</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
export default Header;