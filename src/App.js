import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom';
import './App.css';

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
      <Home />
    </Route>
    <Route path="/films" exact>
      <h1>films</h1>
      <FilmL
    </Route>
      </Switch>
    </BrowserRouter>
  </div>;
}

export default App;
