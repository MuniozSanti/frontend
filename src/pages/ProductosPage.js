import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


const ProductosPage = (props) => {
  return (
    <div>
    <main className="holder productos">
      <div className="contenedor-productos">
        <h2 className="titulo-produc">Productos</h2>
        <nav className="nav-productos">
          <ul>
            <li className="activo"><Link to="/productos">Riego</Link></li>
            <li><Link to="/pileta">Pileta</Link></li>
            <li><Link to="/bombas">Bombas</Link></li>
            <li><Link to="/ablandadores">Ablandadores</Link></li>
            <li><Link to="/jardineria">Jardinería</Link></li>
          </ul>
        </nav>
      </div>
    
      <div className="div-pileta">
        <h2>Productos de riego disponibles</h2>
      </div>
    </main>

<CardGroup>
<Card>
  <Card.Img variant="top" src="holder.js/100px160" />
  <Card.Body>
    <Card.Title>Card title</Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>
  </Card.Body>
</Card>
<Card>
  <Card.Img variant="top" src="holder.js/100px160" />
  <Card.Body>
    <Card.Title>Card title</Card.Title>
    <Card.Text>
      This card has supporting text below as a natural lead-in to additional
      content.{' '}
    </Card.Text>
  </Card.Body>
</Card>
<Card>
  <Card.Img variant="top" src="holder.js/100px160" />
  <Card.Body>
    <Card.Title>Card title</Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This card has even longer content than the first to
      show that equal height action.
    </Card.Text>
  </Card.Body>
</Card>
</CardGroup>

<CardGroup>
<Card>
  <Card.Img variant="top" src="holder.js/100px160" />
  <Card.Body>
    <Card.Title>Card title</Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>
  </Card.Body>
</Card>
<Card>
  <Card.Img variant="top" src="holder.js/100px160" />
  <Card.Body>
    <Card.Title>Card title</Card.Title>
    <Card.Text>
      This card has supporting text below as a natural lead-in to additional
      content.{' '}
    </Card.Text>
  </Card.Body>
</Card>
<Card>
  <Card.Img variant="top" src="holder.js/100px160" />
  <Card.Body>
    <Card.Title>Card title</Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This card has even longer content than the first to
      show that equal height action.
    </Card.Text>
  </Card.Body>
</Card>
</CardGroup>

</div>

  );
}
export default ProductosPage;