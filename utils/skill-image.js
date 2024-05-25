
import bootstrap from '/public/svg/skills/bootstrap.svg';
import c from '/public/svg/skills/c.svg';
import cplusplus from '/public/svg/skills/cplusplus.svg';
import css from '/public/svg/skills/css.svg';
import git from '/public/svg/skills/git.svg';
import html from '/public/svg/skills/html.svg';
import java from '/public/svg/skills/java.svg';
import javascript from '/public/svg/skills/javascript.svg';
import microsoftoffice from '/public/svg/skills/microsoftoffice.svg';
import mongoDB from '/public/svg/skills/mongoDB.svg';
import mysql from '/public/svg/skills/mysql.svg';
import php from '/public/svg/skills/php.svg';
import python from '/public/svg/skills/python.svg';
import react from '/public/svg/skills/react.svg';
import tailwind from '/public/svg/skills/tailwind.svg';

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'html':
      return html;
    case 'css':
      return css;
    case 'javascript':
      return javascript;
    case 'react':
      return react;
    case 'bootstrap':
      return bootstrap;
    case 'mongodb':
      return mongoDB;
    case 'mysql':
      return mysql;
    case 'tailwind':
      return tailwind;
    case 'c':
      return c;
    case 'c++':
      return cplusplus;
    case 'java':
      return java;
    case 'php':
      return php;
    case 'python':
      return python;
    case 'git':
      return git;
    case 'microsoft office':
      return microsoftoffice;
    default:
      break;
  }
}
