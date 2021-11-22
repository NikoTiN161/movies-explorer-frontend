import { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router';
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
import moviesApi from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi';

function App() {

  const history = useHistory();

  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({ name: '', _id: '' });

  const [movies, setMovies] = useState([]);
  const [isPageNotFound, setPageNotFound] = useState(false);
  const [isTabletScreen, setIsTabletScreen] = useState(false);
  const [isVisibilityMenu, setIsVisibilityMenu] = useState(false);

  useEffect(() => {
    mainApi.tokenCheck()
      .then(data => {
        if (data.email) {
          // init();
          setLoggedIn(true);
          // setEmailUser(data.email);
          history.push('/');
        }
      })
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {

    if (localStorage.getItem('movies')) {
      setMovies(JSON.parse(localStorage.getItem('movies')));
    } else {

      moviesApi.getMovies()
        .then((movies) => {
          setMovies(movies);
          localStorage.setItem('movies', JSON.stringify(movies));
        })
        .catch(err => console.error(err));
    }
  }, []);

  useEffect(() => {
    const mediaWatcher = window.matchMedia("(max-width: 768px)")
    setIsTabletScreen(mediaWatcher.matches);

    function updateScreen(e) {
      setIsTabletScreen(e.matches);
    }
    mediaWatcher.addEventListener('change', updateScreen)

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

  function onLogin(email, password) {
    mainApi.login(email, password)
      .then((data) => {
        if (data.message === 'Успешный вход') {
          // init();
          // setCurrentUser(data.email);
          mainApi.getUserInfo()
            .then((user) => {
              console.log(user);
              setCurrentUser(user);
            })
          setLoggedIn(true);
          history.push('/');
        }
        console.log(currentUser);
      })
      .catch(err => console.log(err));
  }

  function onSignOut() {
    mainApi.logout()
      .then(data => {
        if (data.message === 'Успешный выход') {
          setLoggedIn(false);
          // history.push('/signin');
        }
      })
      .catch(err => console.error(err));
  }

  function onRegister(name, email, password) {
    mainApi.register(name, email, password)
      .then(res => {
        if (!!res.data) {
          history.push('/signin');
        }
      })
      .catch(err => console.log(err));
  }


  return (
    <CurrentUserContext.Provider value={{ currentUser, loggedIn }}>
      <Header className="page__header" isTabletScreen={isTabletScreen} isPageNotFound={isPageNotFound}
        onClickMenuButton={clickMenuButton} isVisibilityMenu={isVisibilityMenu} />
      <Switch>
        <Route exact path="/">
          <Main className="page__main" />
        </Route>
        <Route path="/signin">
          <Login
            onLogin={onLogin}
            title="Рады видеть!"
            buttonText="Войти"
          />
        </Route>
        <Route path="/signup">
          <Register
            onRegister={onRegister}
            title="Добро пожаловать!"
            buttonText="Зарегистрироваться"
          />
        </Route>
        <ProtectedRoute
          path="/profile"
          component={Profile}
          className="page__profile"
          onSignOut={onSignOut}
        />
        <ProtectedRoute
          path="/movies"
          component={Movies}
          className="page__movies"
          movies={movies}
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
