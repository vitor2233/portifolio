import React, { useEffect, useState } from 'react';
import './index.css';

import { Card } from 'react-bootstrap';

const Projects = () => {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    fetch('https://api.github.com/users/vitor2233/repos')
      .then(response => response.json())
      .then(data => setRepos(data));
  }, []);
  return (
    <div className="projects">
      <ul className="card-ul">
        {repos.map(repo =>
          <li className="card-li" key={repo.id}>
            <Card className="custom-card">
              <Card.Body>
                <Card.Title>{repo.name}</Card.Title>
                <Card.Text>
                  {repo.description}
                </Card.Text>
                <a className="github-link" href={repo.html_url} target="_blank" rel="noopener noreferrer">Ver detalhes</a>
              </Card.Body>
        <Card.Footer className="text-muted">Linguagem: {repo.language}</Card.Footer>
            </Card>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Projects;