import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";

const AblandadoresPage = (props) => {
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
          <h2>Ablandadores disponibles</h2>

          <CardGroup>
            <Card>
              <Card.Img variant="top" src="../public/imagenes" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
              </Card.Body>
            </Card>
          </CardGroup>
          <br/>
          <CardGroup>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
              </Card.Body>
            </Card>
          </CardGroup>
        </div>
      </main>
    </div>
  );
}
export default AblandadoresPage;