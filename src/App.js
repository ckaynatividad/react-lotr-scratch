import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom';
import './App.css';
import Books from './views/Books/books';
import Characters from './views/Characters/characters';
import Films from './views/Films/films';
import Main from './views/Main/main';

function App() {
  return <div className="App">
    <BrowserRouter>
      <header>
        <NavLink to="/" data-testid="/">
        Home
        </NavLink>
        <NavLink to="/films" data-testid="film-link">
        films
        </NavLink>
        <NavLink to="/characters" data-testid="char-link">
        characters
        </NavLink>
        <NavLink to="/books" data-testid="book-link">
        books
        </NavLink>
      </header>
      <Switch>
        <Route path="/" exact>
          <h1>Home</h1>
          <Main />
        </Route>
        <Route path="/films">
          <h1>films</h1>
          <Films />
        </Route>
        <Route path="/characters">
          <h1>characters</h1>
          <Characters />
        </Route>
        <Route path="/books">
          <Books />
        </Route>
      </Switch>
    </BrowserRouter>
  </div>;
}

export default App;
