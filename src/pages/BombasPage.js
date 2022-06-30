import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";

const BombasPage = (props) => {
  return (
    <div>
      <main className="holder productos">
        <div className="contenedor-productos">
          <h2 className="titulo-produc">Productos</h2>
          <nav className="nav-productos">
            <ul>
              <li><NavLink to="/productos" className={({ isActive }) => isActive ? "activo" : undefined}>Riego</NavLink></li>
              <li><NavLink to="/pileta" className={({ isActive }) => isActive ? "activo" : undefined}>Pileta</NavLink></li>
              <li><NavLink to="/bombas" className={({ isActive }) => isActive ? "activo" : undefined}>Bombas</NavLink></li>
              <li><NavLink to="/ablandadores" className={({ isActive }) => isActive ? "activo" : undefined}>Ablandadores</NavLink></li>
              <li><NavLink to="/jardineria" className={({ isActive }) => isActive ? "activo" : undefined}>Jardineria</NavLink></li>
            </ul>
          </nav>
        </div>

        <div className="div-pileta">
          <h2>Bombas disponibles</h2>

          <CardGroup className='grupo-cartas'>
            <Card>
              <Card.Img variant="top" src="Imagenes/bombas elektrim/Bomba Autocenate Elektrim Kilme.jpg" alt="Bomba Autocenate Elektrim Kilme" />
              <Card.Body>
                <Card.Title>Bomba Autocenate Elektrim Kilme</Card.Title>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src="Imagenes/bombas elektrim/Bomba Autocenate Elektrim Puelche-.jpg" alt="Bomba Autocenate Elektrim Puelche" />
              <Card.Body>
                <Card.Title>Bomba Autocenate Elektrim Puelche</Card.Title>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src="Imagenes/bombas elektrim/Bomba centrífuga Elektrim línea LE.png" alt="Bomba centrífuga Elektrim línea LE"/>
              <Card.Body>
                <Card.Title>Bomba centrífuga Elektrim línea LE</Card.Title>
              </Card.Body>
            </Card>
          </CardGroup>
          <br/>
            <CardGroup >
              <Card>
                <Card.Img variant="top" src="Imagenes/bombas elektrim/Bomba de flujo Elektrim E-FLOW.png" alt="Bomba de flujo Elektrim E-FLOW"/>
                <Card.Body>
                  <Card.Title>Bomba de flujo Elektrim E-FLOW</Card.Title>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src="Imagenes/bombas elektrim/Bomba elevadora inteligente Elektrim_E-SMART.png" alt="Bomba elevadora inteligente Elektrim_E-SMART"/>
                <Card.Body>
                  <Card.Title>Bomba elevadora inteligente Elektrim_E-SMART</Card.Title>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src="Imagenes/bombas elektrim/Bomba presurizadora Elektrim E-PRESS.png" alt="Bomba presurizadora Elektrim E-PRESS"/>
                <Card.Body>
                  <Card.Title>Bomba presurizadora Elektrim E-PRESS</Card.Title>
                </Card.Body>
              </Card>
            </CardGroup>
          </div>
      </main>

    </div>
  );
}
export default BombasPage;