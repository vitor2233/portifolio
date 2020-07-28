import React, { useEffect, useState } from 'react';
import './index.css';

const Projects = () => {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    fetch('https://api.github.com/users/vitor2233/repos')
      .then(response => response.json())
      .then(data => setRepos(data));
  }, []);
  return (
    <div className="projects">
      <ul>
        {repos.map(repo =>
          <li key={repo.id}>
            <a href={repo.html_url}>{repo.name}</a>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Projects;