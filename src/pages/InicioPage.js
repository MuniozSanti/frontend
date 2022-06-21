import React from "react";

const InicioPage = (props) => {
    return (
        <main className="main">
        <div>
             <img className="main-img" src="Imagenes/foto3.jpg" alt="Foto de riego"/>
        </div>
 
        <div className="columnas">
            <section className="texto">
                <h2>Bienvenidos</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam eius id at quidem vel mollitia atque ipsam recusandae, unde suscipit tenetur, quod distinctio! Iusto et facere praesentium, vitae quas quos! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum eum totam velit asperiores eligendi placeat modi ad ea vero? Vitae, animi. Facilis ducimus laudantium debitis dolor atque ad reiciendis et?</p>
            </section>
 
            <section className="texto2">
                <h3>Cuidado del agua</h3>
                <p>El agua dulce es un bien muy escaso que no está disponible para todos. Aunque todos tenemos el mismo derecho, no todos disponen del agua en la forma y en las cantidades que la necesitan.</p>
            </section>
        </div>
     </main> 
 
    );
}
export default InicioPage;