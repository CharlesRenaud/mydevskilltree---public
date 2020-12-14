import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from 'src/components/Button';

import './Footer.scss';

const Footer = () => {
  const handleOnClick = () => {
    console.log('click');
  };
  const handleClick = handleOnClick;
  return (
    <div className="Footer">
      {/* <NavLink to="/leaderboard" onClick={handleOnClick}>
        <Button
          key="Leaderboard"
          onClick={handleClick}
          content="Leaderboard"
          fill={false}
          classPerso="buttonFooter"
        />
      </NavLink>
      <NavLink to="/team" onClick={handleOnClick}>
        <Button
          key="Team"
          onClick={handleClick}
          content="Team"
          fill={false}
          classPerso="buttonFooter"
        />
      </NavLink>
      <NavLink to="/faq" onClick={handleOnClick}>
        <Button
          key="FAQ"
          onClick={handleClick}
          content="FAQ"
          fill={false}
          classPerso="buttonFooter"
        />
      </NavLink> */}
      <p className="textFooter">My Dev Skill Tree | 2020 © Tous droits réservés | Suivez-nous : <a href="https://www.facebook.com/My-Dev-Skill-Tree-102595178117837" target="_blank">Facebook</a> - <a href="https://twitter.com/skill_dev" target="_blank">Twitter</a></p>
    </div>
  );
};

export default Footer;
