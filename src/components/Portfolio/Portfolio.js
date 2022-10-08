import './Portfolio.css';

const Portfolio = () => {
   return (
      <div className="portfolio">
         <h3 className="portfolio__title">Портфолио</h3>
         <ul className="portfolio__links">
            <li className="portfolio__link-container">
               <a className="portfolio__link" rel='noreferrer' href="https://github.com/NatalyMaxi/how-to-learn" target="_blank">
                  Статичный сайт
               </a>
               <span>↗</span>
            </li>
            <li className="portfolio__link-container">
               <a className="portfolio__link" rel='noreferrer' href="https://github.com/NatalyMaxi/russian-travel" target="_blank">
                  Адаптивный сайт
               </a>
               <span>↗</span>
            </li>
            <li className="portfolio__link-container">
               <a className="portfolio__link" rel='noreferrer' href="https://github.com/NatalyMaxi/react-mesto-api-full" target="_blank">
                  Одностраничное приложение
               </a>
               <span>↗</span>
            </li>
         </ul>
      </div>
   )
}

export default Portfolio;

// Portfolio — компонент со ссылками на другие проекты.