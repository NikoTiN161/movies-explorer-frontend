import { useState } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute';
import Header from '../Header';
import Main from '../Main';
import Movies from '../Movies';
import Footer from '../Footer';
import SavedMovies from '../SavedMovies';
import Profile from '../Profile';
import Register from '../Register';
import Login from '../Login';
import PageNotFound from '../PageNotFound';

function App() {
  let loggedIn = true;

  const [ isPageNotFound, setPageNotFound ] = useState(false);

  function setPageNotFoundTrue() {
    setPageNotFound(true);
  }

  return (
    <CurrentUserContext.Provider value={{ loggedIn }}>
      <Header className="page__header" isPageNotFound={isPageNotFound} />
      <Switch>
        <Route exact path="/">
          <Main className="page__main" />
        </Route>
        <Route path="/signin">
          <Login
            // onLogin={onLogin}
            title="Рады видеть!"
            buttonText="Войти"
          />
        </Route>
        <Route path="/signup">
          <Register
            // onRegister={onRegister}
            title="Добро пожаловать!"
            buttonText="Зарегистрироваться"
          />
        </Route>
        <ProtectedRoute
          path="/profile"
          component={Profile}
          className="page__profile"
        />
        <ProtectedRoute
          path="/movies"
          component={Movies}
          className="page__movies"
        />
        <ProtectedRoute
          path="/saved-movies"
          component={SavedMovies}
          className="page__saved-movies"
        />
        <Route>
          <PageNotFound setPageNotFoundTrue={setPageNotFoundTrue} />

        </Route>
      </Switch>
      <Footer className="page__footer" isPageNotFound={isPageNotFound} />
    </CurrentUserContext.Provider>
  );
}

export default App;
