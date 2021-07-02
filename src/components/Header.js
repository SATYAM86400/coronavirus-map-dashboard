import React from 'react';
import { FaGithub } from 'react-icons/fa';

import Container from 'components/Container';

const Header = () => {
  return (
    <header>
      <Container type="content">
        <h1>Coronavirus (COVID-19)</h1>
        <ul>
          <li>
            <a href="">
              Gatsby Starter Leaflet
            </a>
          </li>
          <li>
            <a href="https://www.github.com">
              <FaGithub /> Github
            </a>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
