import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const Main = () => {
   return (
      <>
         <Header />
         <Promo />
         <AboutProject />
         <Techs />
         <AboutMe />
         <Portfolio />
         <Footer />
      </>
   );
}

export default Main;

// Main — компонент страницы «О проекте». Сщдержит только презентационные компоненты, за исключением шапки навигации