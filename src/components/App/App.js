import './App.css';
import { Switch, Route } from 'react-router-dom';
import Main from '../Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Header />
          <Main />
          <Footer />
        </Route>
        <Route path="/movies">
          <Header />
          <Movies />
          <Footer />
        </Route>
        <Route exact path="/saved-movies">
          <Header />
          <SavedMovies />
          <Footer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
