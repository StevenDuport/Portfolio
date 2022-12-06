import { Link } from 'react-router-dom';

import handBack from '../../assets/handBack.png';
import { GitHub, Globe} from 'react-feather';

import { data } from '../../data';
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
        {data.map((item) => (
        <article 
          className="work_article"
          key={item.title}
        >
          <h2 className="work_article-title">
            {item.title}
          </h2>
          <img src={item.image} className="work_article-image" />
          <ul className="work_article-techno">
            {item.technos.map((items) => (
              <li key={items}>{items}</li>
            ))}
          </ul>
          <p className="work_article-description">
            {item.description}
          </p>
          {item.link && <a href={item.link} className="work_article-link" target="_blank"><Globe size={15} strokeWidth={3}/><p>Découvrir le site</p></a>}
          <a href={item.gitHub} className="work_article-link" target="_blank"><GitHub size={15} strokeWidth={3}/><p>GitHub</p></a>
        </article>
      ))}
      </div>
    </div>
  );
}

export default Work;
