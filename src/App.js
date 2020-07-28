import React from 'react';
import './App.css';
import Routes from './Routes';
import ProfilePhoto from './assets/eu.jpg';


function App() {
  return (
    <div className="App">
      <div className="main">
      </div>
      <div className="profile">
          <div className="about">
            <img className="profile-img" src={ProfilePhoto} alt="Vítor Guilherme"/>
            <div className="names">
            <h2 className="desc">Vítor Guilherme</h2>
            <p className="desc">Desenvolvedor</p>
            </div>
          </div>
          <hr/>
          <div className="contact">
            <p className="email"><a href="mailto:vitorguilherme2233@gmail.com">vitorguilherme2233@gmail.com</a></p>
          </div>
          <div className="options">
            <ul>
              <li>
                <div className="projects-li">
                  <p>12</p>
                <a href="/">Projetos</a>
                </div>
              </li>
              <li>
              <a href="/courses">Cursos</a>
              </li>
              <li>
              <a href="/formation">Formação</a>
              </li>
              <li>
              <a href="/experience">Experiência</a>
              </li>
            </ul>
          </div>
        </div>
      <div className="content">
        <Routes/>
      </div>
    </div>
  );
}

export default App;
