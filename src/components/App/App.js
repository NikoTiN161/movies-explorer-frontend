import { useEffect, useState } from 'react';
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
import Menu from '../Menu';

function App() {
  let loggedIn = true;

  const [isPageNotFound, setPageNotFound] = useState(false);
  const [isTabletScreen, setIsTabletScreen] = useState(false);
  const [isVisibilityMenu, setIsVisibilityMenu] = useState(false);


  useEffect(() => {
    const mediaWatcher = window.matchMedia("(max-width: 768px)")
    setIsTabletScreen(mediaWatcher.matches);

    //watch for updates
    function updateScreen(e) {
      setIsTabletScreen(e.matches);
    }
    mediaWatcher.addEventListener('change', updateScreen)

    // clean up after ourselves
    return function cleanup() {
      mediaWatcher.removeEventListener('change', updateScreen)
    }
  }, []);

  function setPageNotFoundTrue() {
    setPageNotFound(true);
  }

  function clickMenuButton() {
    setIsVisibilityMenu(!isVisibilityMenu);
  }

  return (
    <CurrentUserContext.Provider value={{ loggedIn }}>
      <Header className="page__header" isTabletScreen={isTabletScreen} isPageNotFound={isPageNotFound}
        onClickMenuButton={clickMenuButton} isVisibilityMenu={isVisibilityMenu} />
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
          className=""
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
      <Menu visibility={isVisibilityMenu} />
    </CurrentUserContext.Provider>
  );
}

export default App;
