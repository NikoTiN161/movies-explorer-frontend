import { Route, Switch } from 'react-router';
import './App.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';

function App() {
  let loggedIn = true;
  return (
    <CurrentUserContext.Provider value={{  loggedIn }}>
      <Header className="page__header" />
      {/* <Switch>
        <Route path="/sing-in">
          <Login
            // onLogin={onLogin}
            title="Вход"
            buttonText="Войти"
          />
        </Route>
        <Route path="/sing-up">
          <Register
            // onRegister={onRegister}
            title="Регистрация"
            buttonText="Зарегистрироваться"
          />
        </Route> */}
        <ProtectedRoute
          path="/"
          component={Main}
          className="page__main"
        />
        {/* <ProtectedRoute
          path="/"
          component={Movies}
          className="page__movies"
        />
        <ProtectedRoute
          path="/"
          component={SavedMovies}
          className="page__saved-movies"
        />
      </Switch> */}
      <Footer className="page__footer" />
    </CurrentUserContext.Provider>
  );
}

export default App;
