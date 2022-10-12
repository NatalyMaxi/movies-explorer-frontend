// import Promo from './Promo/Promo';
// import AboutProject from './AboutProject/AboutProject';
// import Techs from './Techs/Techs';
// import AboutMe from './AboutMe/AboutMe';
// import Portfolio from './Portfolio/Portfolio';

import Movies from './Movies/Movies';
import SearchForm from './SearchForm/SearchForm';


const Main = () => {
   return (
      <>
         <SearchForm/>
         {/* <Promo />
         <AboutProject />
         <Techs />
         <AboutMe />
         <Portfolio /> */}
         <Movies />
      </>
   );
}

export default Main;

// Main — компонент страницы «О проекте». Сщдержит только презентационные компоненты, за исключением шапки навигации