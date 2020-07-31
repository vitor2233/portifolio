import React from 'react';
import './index.css';

import { Card } from 'react-bootstrap';

function Experience() {
  return (
    <div className="experience">
        <ul className="card-ul">
        <li className="card-li">
          <Card className="custom-card">
            <Card.Body>
              <Card.Title>Desenvolvedor Fullstack - SporTI</Card.Title>
              <Card.Text>
              Meu primeiro estágio onde aprendi ASP .NET, atuava com HTML, CSS e Javascript no front-end e C# ASP .NET, com a linguagem de banco MySQL no back-end, tive contato com a metodologia SCRUM com as reuniões diárias e planejamento das atividades de desenvolvimento. Consegui o estágio no primeiro semestre, e sai devido ao COVID-19.
          </Card.Text>
              <a className="github-link" href="https://www.linkedin.com/in/vitor-guilherme2233/" target="_blank" rel="noopener noreferrer">Ver detalhes</a>
            </Card.Body>
            <Card.Footer className="text-muted">Duração: 4 meses</Card.Footer>
          </Card>
        </li>
        <li className="card-li">
          <Card className="custom-card">
            <Card.Body>
              <Card.Title>Freelance - Pretonet</Card.Title>
              <Card.Text>
                Site desenvolvido para um provedor de internet, link abaixo em "Ver detalhes".
          </Card.Text>
              <a className="github-link" href="https://provedorpretonet.com.br/" target="_blank" rel="noopener noreferrer">Ver detalhes</a>
            </Card.Body>
            <Card.Footer className="text-muted">Duração: 1 mês</Card.Footer>
          </Card>
        </li>
      </ul>
    </div>
  );
}

export default Experience;