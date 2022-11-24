import { Link } from 'react-router-dom';

import handBack from '../../assets/handBack.png';
import matchJob1 from '../../assets/matchJob1.jpg';
import meteo from '../../assets/ApiMeteo.jpg';
import pfc from '../../assets/PFC.jpg';
import portfolio from '../../assets/portfolio.jpg';

import './work.scss';

function Work () {
  return(
    <div className="work">
      <Link to="/" className="about_back">
        <img src={handBack} className="about_back-img" alt="illustration de main"></img>
      </Link>
      <div className="work_list">
      <h1 className="work_title">
        <span>P</span>
        <span>r</span>
        <span>o</span>
        <span>j</span>
        <span>e</span>
        <span>t</span>
        <span>s</span>
      </h1>
        <article className="work_article">
          <h2 className="work_article-title">
            Match-Job
          </h2>
          <img src={matchJob1} className="work_article-image" />
          <ul className="work_article-techno">
            <li>#CSS3</li>
            <li>#JavaScript</li>
            <li>#React</li>
            <li>#ReactRouter</li>
            <li>#Axios</li>
            <li>#Symfony</li>
          </ul>
          <p className="work_article-description">
            Match-Job est une application de recherche d'emploi pour les développeurs web. Elle a été réalisé en 1 mois, dans le cadre d'un projet de fin de formation.
          </p>
          <a href='https://youtu.be/WjrPnFDAWpw?t=487' className="work_article-link" target="_blank">Voir la présentation</a>
          <a href='https://github.com/StevenDuport/Match-Job' className="work_article-link" target="_blank">GitHub</a>
        </article>

        <article className="work_article2">
          <h2 className="work_article-title">
            Météo-API
          </h2>
          <img src={meteo} className="work_article-image" />
          <ul className="work_article-techno">
            <li>#HTML5</li>
            <li>#CSS3</li>
            <li>#JavaScript</li>
          </ul>
          <p className="work_article-description">
            Ce site permet de récupérer la météo d'une ville grâce à une barre de recherche. Réalisé en parallèle de ma formation chez O'clock, il avait pour but de m'entrainer à utiliser une API.
          </p>
          <a href="http://meteo-api.surge.sh" className="work_article-link" target="_blank">Visiter le site</a>
          <a href='https://github.com/StevenDuport/Meteo-API' className="work_article-link" target="_blank">GitHub</a>
        </article>

        <article className="work_article">
          <h2 className="work_article-title">
            Pierre Feuille Ciseaux
          </h2>
          <img src={pfc} className="work_article-image" />
          <ul className="work_article-techno">
            <li>#HTML5</li>
            <li>#CSS3</li>
            <li>#JavaScript</li>
          </ul>
          <p className="work_article-description">
          Réalisation du "célèbre" jeu: Pierre Feuille Ciseaux.
          </p>
          <a href='https://pierrepapierciseaux.surge.sh/' className="work_article-link" target="_blank">Visiter le site</a>
          <a href='https://github.com/StevenDuport/Pierre-Feuille-Ciseaux' className="work_article-link" target="_blank">GitHub</a>
        </article>

        <article className="work_article">
          <h2 className="work_article-title">
            Portfolio
          </h2>
          <img src={portfolio} className="work_article-image" />
          <ul className="work_article-techno">
            <li>#CSS3</li>
            <li>#JavaScript</li>
            <li>#React</li>
            <li>#ReactRouter</li>
          </ul>
          <p className="work_article-description">
            Réalisation de ce portfolio.
          </p>
          <a href='https://github.com/StevenDuport/Pierre-Feuille-Ciseaux' className="work_article-link" target="_blank">GitHub</a>
        </article>
      </div>
    </div>
  );
}

export default Work;

