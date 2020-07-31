import React, { useEffect, useState } from 'react';
import './App.css';
import Routes from './Routes';
import ProfilePhoto from './assets/eu.jpg';


const App = () => {
  const [publicRepos, setPublicRepos] = useState('0');

  useEffect(() => {
    fetch('https://api.github.com/users/vitor2233')
      .then(response => response.json())
      .then(data => setPublicRepos(data.public_repos));
  }, []);

  return (
    <div className="App">
      <div className="main">
      </div>
      <div className="profile">
        <div className="about">
          <img className="profile-img" src={ProfilePhoto} alt="Vítor Guilherme" />
          <div className="names">
            <h2 className="desc">Vítor Guilherme</h2>
            <p className="desc">Desenvolvedor</p>
          </div>
        </div>
        <hr />
        <div className="contact">
          <p className="email"><a href="mailto:vitorguilherme2233@gmail.com">vitorguilherme2233@gmail.com</a></p>
        </div>
        <div className="options">
          <ul>
            <li>
              <div className="quantity">
                <p>{publicRepos}</p>
                <a href="/">Projetos</a>
              </div>
            </li>
            <li>
              <div className="quantity">
                <p>11</p>
                <a href="/courses">Cursos</a>
              </div>
            </li>
            <li>
              <div className="quantity">
                <p>3</p>
                <a href="/formation">Formações</a>
              </div>
            </li>
            <li>
              <div className="quantity">
                <p>2</p>
                <a href="/experience">Experiências</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="content">
        <Routes />
      </div>
    </div>
  );

}

export default App;
