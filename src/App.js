import './App.css';
import React, {useState} from 'react';
import Integrantes from './Integrantes';
import data from './data';

function App() {
  const [equipo, setEquipo] = useState(data)
  return (
    <div className="App">
      <header id="header">
        <nav className="nav">
          <ul id="nav-bar">
            <li className="item-nav"><a href="header">Home</a></li>
            <li className="item-nav"><a href="blog">Blog</a></li>
            <li className="item-nav"><a href="sobreNosotros">Sobre Noosotros</a></li>
            <li className="item-nav"><a href="integrantes">Integrantes</a></li>
            <li className="item-nav"><a href="contacto">Contacto</a></li>
          </ul>
        </nav>
        <div id="heroSection">
          <img src="./imagenes/logoADP.png" alt="" />
        </div>

      </header>
      <main>
        <div id="blog">
          <h2>Blog</h2>
          <div id="post" className='tarjeta'>
            <img src="../imagenes/inicio/totar10aniversario.jpg" alt="" />
            <p>Festejo del 10mo aniversario</p>
            <p>Este año en celebracion Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci optio quaerat beatae veniam cupiditate iste dolorum deserunt doloribus sapiente unde nesciunt laboriosam voluptatem, repudiandae sunt. Eligendi molestiae accusantium cupiditate quasi?</p>
          </div>
          <div id="post" className='tarjeta'>
            <img src="../imagenes/inicio/totar10aniversario.jpg" alt="" />
            <p>Festejo del 10mo aniversario</p>
            <p>Este año en celebracion Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci optio quaerat beatae veniam cupiditate iste dolorum deserunt doloribus sapiente unde nesciunt laboriosam voluptatem, repudiandae sunt. Eligendi molestiae accusantium cupiditate quasi?</p>
          </div>
          <div id="post" className='tarjeta'>
            <img src="../imagenes/inicio/totar10aniversario.jpg" alt="" />
            <p>Festejo del 10mo aniversario</p>
            <p>Este año en celebracion Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci optio quaerat beatae veniam cupiditate iste dolorum deserunt doloribus sapiente unde nesciunt laboriosam voluptatem, repudiandae sunt. Eligendi molestiae accusantium cupiditate quasi?</p>
          </div>
        </div>
        <div id="sobreNosotros">
          <div id="fotoSobreNosotros">
            <img src="../imagenes/inicio/findeanio.jpg" alt="" />
          </div>
          <div id="explicacionSobreNosotros">
            <h2 id="reseña">Reseña</h2>
            <p>Atletas del prado fue fundado el diciembre del año 2004 por Daniel Ibarrola y Edward Arap.</p> 
            <p>Los colores de la camiseta fuero elegido gracias el primer sponsor que apoyo la iniciativa.</p> <br />
            <p>En el **** atletas del prado pasa a ser una institucion deportiva avalada por el mec.</p> <br />
            <p>Hoy en día el equipo se encuentra compitiendo en los distintos torneo a nivel nacional tanto en Agrupación de Atletas del Uruguay (AAU), como en la Confederación Atlética uruguay (CAU) y también en Asociación de Atletas Masters del Uruguay (ASAVUR).</p> <br />    
          </div>
        </div>
        <div id="evento">
          <h2>Eventos/Agenda</h2>
          <p>Acá se van a mostrar todos los eventos en forma de agenda y calendario</p>
        </div>
        <div id="integrantes">
          <h2>Equipo</h2>
          <div className="equipo">
            <Integrantes equipo={equipo}/>
          </div>
        </div>
        
        
        <div className="hileraFotos">
          <img className="hilera-item" src="./imagenes/inicio/bandera.jpg" alt="" />
          <img className="hilera-item"src="./imagenes/inicio/antesdecorrer.jpg" alt="" />
          <img className="hilera-item" src="./imagenes/inicio/laschiquis.jpg" alt="" />
          <img className="hilera-item" src="./imagenes/inicio/totar10aniversario.jpg" alt="" />
        </div>

      </main>
      <footer>
      <div id="contacto">
        <p></p>
        <p></p>
        <p></p>
      </div>
        
      </footer>
    </div>
  );
}

export default App;
