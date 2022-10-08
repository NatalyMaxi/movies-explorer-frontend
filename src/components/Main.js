import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';

const Main = () => {
   return (
      <>
         <Promo />
         <AboutProject />
         <Techs />
      </>
   );
}

export default Main;

// Main — компонент страницы «О проекте». Сщдержит только презентационные компоненты, за исключением шапки навигации