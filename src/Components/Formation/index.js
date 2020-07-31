import React from 'react';
import './index.css';

import { Card } from 'react-bootstrap';

function Formation() {
  return (
    <div className="formation">
      <ul className="card-ul">
        <li className="card-li">
          <Card className="custom-card">
            <Card.Body>
              <Card.Title>Sistemas de informação - UNA</Card.Title>
              <Card.Text>
              Sistemas de Informação na UNA capacita os estudantes na extração, compreensão, análise e utilização da informação em sistemas computacionais para a gestão estratégica das organizações. Nesse bacharelado, são trabalhadas todas as competências técnicas, sociais e humanas para a formação de um profissional de qualidade na área da tecnologia da informação, são elas: especificar, projetar, desenvolver, testar, implantar e manter sistemas computacionais.
          </Card.Text>
              <a className="github-link" href="https://www.una.br/cursos/sistemas-de-informacao/" target="_blank" rel="noopener noreferrer">Ver detalhes</a>
            </Card.Body>
            <Card.Footer className="text-muted">Situação: 2° semestre</Card.Footer>
          </Card>
        </li>
        <li className="card-li">
          <Card className="custom-card">
            <Card.Body>
              <Card.Title>Técnico em TI - SENAI</Card.Title>
              <Card.Text>
                Curso técnico em TI no SENAI qualifica o profissional a 
                conhecer a métodologia SCRUM para desenvolvimento de software, e também desenvolver aplicativos desktop com C#, mobile Android com Java, e sistemas web com HTML, CSS, Javascript e PHP.
          </Card.Text>
              <a className="github-link" href="https://www.linkedin.com/in/vitor-guilherme2233/" target="_blank" rel="noopener noreferrer">Ver detalhes</a>
            </Card.Body>
            <Card.Footer className="text-muted">Situação: Concluído</Card.Footer>
          </Card>
        </li>
        <li className="card-li">
          <Card className="custom-card">
            <Card.Body>
              <Card.Title>High School - UPTIME</Card.Title>
              <Card.Text>
                Curso de inglês com duração de 4 anos na uptime.
          </Card.Text>
              <a className="github-link" href="https://www.linkedin.com/in/vitor-guilherme2233/" target="_blank" rel="noopener noreferrer">Ver detalhes</a>
            </Card.Body>
            <Card.Footer className="text-muted">Situação: Concluído</Card.Footer>
          </Card>
        </li>
      </ul>
    </div>
  );
}

export default Formation;