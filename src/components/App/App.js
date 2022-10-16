import './App.css';
import { Switch, Route } from 'react-router-dom';
import Main from '../Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import ErrorPage from '../ErrorPage/ErrorPage';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';


function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/'>
          <Header />
          <Main />
          <Footer />
        </Route>
        <Route path='/movies'>
          <Header />
          <Movies />
          <Footer />
        </Route>
        <Route exact path='/saved-movies'>
          <Header />
          <SavedMovies />
          <Footer />
        </Route>
        <Route path='/profile'>
          <Profile/>
        </Route>
        <Route path='/signin'>
          <Login />
        </Route>
        <Route path='/signup'>
          <Register />
        </Route>
        <Route path='*'>
          <ErrorPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
