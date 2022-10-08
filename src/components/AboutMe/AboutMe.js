import './AboutMe.css';
import photo from '../../images/photo.jpg';

const AboutMe = () => {
   return (
      <section id="student" className="about-me">
         <h2 className="about-me__title">Студент</h2>
         <div className="about-me__container">
            <div className="about-me__info">
               <h3 className="about-me__name">Наталья</h3>
               <h4 className="about-me__job">Фронтенд-разработчик, 43 года</h4>
               <p className="about-me__description">
                  Я живу в Тюмени. Окончила ЧПОУ ТОСПО «ТюмКЭУП» по специальности юрист. Недавно возник повышенный интерес к программированию, захотелось самой создавать сайты, приложения. После некоторых раздумий было принято решение попробовать развиваться в данной сфере. В итоге прошла курсы Яндекс. Практикума "Веб-разработчик". Обучение очень понравилось, теперь еще больше желание углубиться в эту профессию и стать востребованным специалистом.
               </p>
               <a className="about-me__link" href='https://github.com/NatalyMaxi' target="_blank" rel='noreferrer'>Github</a>
            </div>
            <img className="about-me__photo" src={photo} alt="Фотография" />
         </div>
      </section>
   )
}

export default AboutMe;

// AboutMe — компонент с информацией о студенте.