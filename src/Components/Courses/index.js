import React from 'react';
import './index.css';

import { Card } from 'react-bootstrap';

function Courses() {
  return (
    <div className="courses">
        <ul className="card-ul">
        <li className="card-li">
          <Card data-aos="fade-up" data-aos-duration="1000" className="custom-card">
            <Card.Body>
              <Card.Title>Next level week 1 - Rocketseat</Card.Title>
              <Card.Text>
              O NLW é um evento com muito código, desafios, networking e um único objetivo: te levar para o próximo nível.
          </Card.Text>
              <a className="github-link" href="https://nextlevelweek.com/" target="_blank" rel="noopener noreferrer">Ver detalhes</a>
            </Card.Body>
            <Card.Footer className="text-muted">Duração: 1 semana</Card.Footer>
          </Card>
        </li>
        <li className="card-li">
          <Card data-aos="fade-up" data-aos-duration="1000" className="custom-card">
            <Card.Body>
              <Card.Title>Semana omnistack 9 e 10 - Rocketseat</Card.Title>
              <Card.Text>
              Na semana omnistack você aprende na prática o poder da stack Node.js + ReactJS + React Native, e como essas tecnologias podem te levar até os seus maiores objetivos como programador.
          </Card.Text>
              <a className="github-link" href="https://rocketseat.com.br/" target="_blank" rel="noopener noreferrer">Ver detalhes</a>
            </Card.Body>
            <Card.Footer className="text-muted">Duração: 1 semana</Card.Footer>
          </Card>
        </li>
        <li className="card-li">
          <Card data-aos="fade-up" data-aos-duration="1000" className="custom-card">
            <Card.Body>
              <Card.Title>Build an app with ASPNET Core and Angular from scratch</Card.Title>
              <Card.Text>
              A practical example of how to build an application with ASP.NET Core WebAPI (v2.2) and Angular (v8) from start to finish
          </Card.Text>
              <a className="github-link" href="https://www.udemy.com/course/build-an-app-with-aspnet-core-and-angular-from-scratch/" target="_blank" rel="noopener noreferrer">Ver detalhes</a>
            </Card.Body>
            <Card.Footer className="text-muted">Duração: 29 horas</Card.Footer>
          </Card>
        </li>
        <li className="card-li">
          <Card data-aos="fade-up" data-aos-duration="1000" className="custom-card">
            <Card.Body>
              <Card.Title>UX Design Rápido e Prático</Card.Title>
              <Card.Text>
              60 princípios de UX Design para aplicar na construção de sistemas web e mobile ensinados de forma rápida e direta.
          </Card.Text>
              <a className="github-link" href="https://www.udemy.com/course/uxdesign-rapido-e-pratico/" target="_blank" rel="noopener noreferrer">Ver detalhes</a>
            </Card.Body>
            <Card.Footer className="text-muted">Duração: 11 horas</Card.Footer>
          </Card>
        </li>
        <li className="card-li">
          <Card data-aos="fade-up" data-aos-duration="1000" className="custom-card">
            <Card.Body>
              <Card.Title>UI Design: Design de Interfaces com foco em Projetos Web</Card.Title>
              <Card.Text>
              Aprenda criar sites, landing pages e e-commerces com foco no usuário. Da teoria à pratica.
          </Card.Text>
              <a className="github-link" href="https://www.udemy.com/course/design-de-interfaces-web/" target="_blank" rel="noopener noreferrer">Ver detalhes</a>
            </Card.Body>
            <Card.Footer className="text-muted">Duração: 1 semana</Card.Footer>
          </Card>
        </li>
        <li className="card-li">
          <Card data-aos="fade-up" data-aos-duration="1000" className="custom-card">
            <Card.Body>
              <Card.Title>JavaScript - Curso COMPLETO com 6 Projetos REAIS</Card.Title>
              <Card.Text>
              JavaScript do 0 ao Avançado, crie um WhatsApp e Dropbox Clone com Node JS, Express JS, Socket IO, Firebase, Webpack e +!
          </Card.Text>
              <a className="github-link" href="https://www.udemy.com/course/javascript-curso-completo/" target="_blank" rel="noopener noreferrer">Ver detalhes</a>
            </Card.Body>
            <Card.Footer className="text-muted">Duração: 39 horas</Card.Footer>
          </Card>
        </li>
        <li className="card-li">
          <Card data-aos="fade-up" data-aos-duration="1000" className="custom-card">
            <Card.Body>
              <Card.Title>Git Completo: Do Básico ao Avançado</Card.Title>
              <Card.Text>
              Passo a passo simples e direto a respeito das funcionalidades do Git com exemplos fáceis e eficientes!
          </Card.Text>
              <a className="github-link" href="https://www.udemy.com/course/git-completo-do-basico-ao-avancado/" target="_blank" rel="noopener noreferrer">Ver detalhes</a>
            </Card.Body>
            <Card.Footer className="text-muted">Duração: 5 horas</Card.Footer>
          </Card>
        </li>
        <li className="card-li">
          <Card data-aos="fade-up" data-aos-duration="1000" className="custom-card">
            <Card.Body>
              <Card.Title>Curso Desenvolvedor Web Completo + 10 de projetos.</Card.Title>
              <Card.Text>
              HTML5, CSS3, Javascript, BootStrap, jQuery, TypeScript, PHP, MySQL, AJAX, SEO e muito mais.
          </Card.Text>
              <a className="github-link" href="https://www.udemy.com/course/curso-desenvolvedor-web-completo/" target="_blank" rel="noopener noreferrer">Ver detalhes</a>
            </Card.Body>
            <Card.Footer className="text-muted">Duração: 52 horas</Card.Footer>
          </Card>
        </li>
        <li className="card-li">
          <Card data-aos="fade-up" data-aos-duration="1000" className="custom-card">
            <Card.Body>
              <Card.Title>Curso Completo de PHP 7</Card.Title>
              <Card.Text>
              Torne-se um Desenvolvedor PHP, aprenda com dois especialistas a programar do básico ao avançado em um projeto completo.
          </Card.Text>
              <a className="github-link" href="https://www.udemy.com/course/curso-php-7-online/" target="_blank" rel="noopener noreferrer">Ver detalhes</a>
            </Card.Body>
            <Card.Footer className="text-muted">Duração: 34 horas</Card.Footer>
          </Card>
        </li>
      </ul>
    </div>
  );
}

export default Courses;