import './NavBar.css'

const NavBar = () => {
   return (
      <nav className="navbar">
         <ul className="navbar__menu">
            <li className="navbar__menu-item">
               <a className="navbar__link" href="#about-project">О проекте</a>
            </li>
            <li className="navbar__menu-item">
               <a className="navbar__link" href="#technologies">Технологии</a>
            </li>
            <li className="navbar__menu-item">
               <a className="navbar__link" href="#student">Студент</a>
            </li>
         </ul>
      </nav>
   )
}

export default NavBar;

//NavBar — компонент с навигацией по странице «О проекте».