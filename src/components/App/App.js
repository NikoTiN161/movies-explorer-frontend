import { Route, Switch } from 'react-router';
import './App.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute';
import Header from '../Header';
import Main from '../Main';
import Movies from '../Movies';
import Footer from '../Footer';

function App() {
  let loggedIn = true;
  return (
    <CurrentUserContext.Provider value={{ loggedIn }}>
      <Header className="page__header" />
      <Switch>
        {/* <Route path="/signin">
          <Login
            // onLogin={onLogin}
            title="Вход"
            buttonText="Войти"
          />
        </Route>
        <Route path="/signup">
          <Register
            // onRegister={onRegister}
            title="Регистрация"
            buttonText="Зарегистрироваться"
          />
        </Route> */}


        <ProtectedRoute
          path="/movies"
          component={Movies}
          className="page__movies"
        />
        
        {/*
        <ProtectedRoute
        path="/saved-movies"
        component={SavedMovies}
        className="page__saved-movies"
      /> */}
        <Route path="/">
          <Main className="page__main" />
        </Route>
      </Switch>
      <Footer className="page__footer" />
    </CurrentUserContext.Provider>
  );
}

export default App;
