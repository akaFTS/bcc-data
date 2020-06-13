import React from 'react';
import GithubButton from './GithubButton';

const Footer = () => {
  return (
    <footer className="bg-light-gray flex flex-column justify-center items-center ph2 pv2 f5 gray">
      <span className="mb2">
        <span>por </span>
        <a
          href="https://www.linkedin.com/in/gustavohfts/"
          className="fw6 mid-gray pointer hover-dark-gray"
        >
          Gustavo Silva
        </a>
        <span>, com orientação do prof. Carlinhos.</span>
      </span>
      <div className="flex flex-row justify-center mv2">
        <GithubButton />
      </div>
    </footer>
  );
};

export default Footer;
