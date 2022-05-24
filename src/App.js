import './App.css';
import React, {useState} from 'react';
import Integrantes from './Integrantes';
import data from './data';
import Blog from './BLOG';
import posts from './posts';


function App() {
  const [equipo, setEquipo] = useState(data)
  const [todosPosts, setPosts] = useState(posts);
  return (
    <div className="App">
      {/*Header */}
      <header id="header">
        <nav className="nav">
          <div className="logoNav">
            <img src="./imagenes/logoADP.png" alt="" />
          </div> 
          <ul id="nav-bar">
            <li className="item-nav"><a href="#header">HOME</a></li>
            <li className="item-nav"><a href="#blog">BLOG</a></li>
            <li className="item-nav"><a href="#sobreNosotros">SOBRE NOSOTROS</a></li>
            <li className="item-nav"><a href="#eventos">EVENTOS/AGENDA</a></li>
            <li className="item-nav"><a href="#integrantes">EQUIPO</a></li>
            <li className="item-nav"><a href="#contacto">CONTACTO</a></li>
          </ul>
        </nav>
        <div id="heroSection">
          <img src="./imagenes/logoADP.png" alt="" />
        </div>

      </header>
      <main>
        {/*Seccion blog */}
        <div id="blog">
          <h2>BLOG</h2>
          <div id="posts">
            <Blog posts={todosPosts} />
          </div>
          
        </div>
        <div id="sobreNosotros">
          <div id="fotoSobreNosotros">
            <img src="../imagenes/inicio/findeanio.jpg" alt="" />
          </div>
          <div id="explicacionSobreNosotros">
            <h2 id="reseña">RESEÑA</h2>
            <p>Atletas del prado fue fundado el diciembre del año 2004 por Daniel Ibarrola y Edward Arap.</p> 
            <p>Los colores de la camiseta fuero elegido gracias el primer sponsor que apoyo la iniciativa.</p> <br />
            <p>En el **** atletas del prado pasa a ser una institucion deportiva avalada por el mec.</p> <br />
            <p>Hoy en día el equipo se encuentra compitiendo en los distintos torneo a nivel nacional tanto en Agrupación de Atletas del Uruguay (AAU), como en la Confederación Atlética uruguay (CAU) y también en Asociación de Atletas Masters del Uruguay (ASAVUR).</p> <br />    
          </div>
        </div>
        <div id="evento">
          <h2>EVENTOS/AGENDA</h2>
          <p>Acá se van a mostrar todos los eventos en forma de agenda y calendario</p>
        </div>
        <div className="hileraFotos">
          <img className="hilera-item" src="./imagenes/inicio/bandera.jpg" alt="" />
          <img className="hilera-item"src="./imagenes/inicio/antesdecorrer.jpg" alt="" />
          <img className="hilera-item" src="./imagenes/inicio/laschiquis.jpg" alt="" />
          <img className="hilera-item" src="./imagenes/inicio/torta10aniversario.jpg" alt="" />
        </div>
        <div id="integrantes">
          <h2>EQUIPO</h2>
          <div className="equipo">
            <Integrantes equipo={equipo}/>
          </div>
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
