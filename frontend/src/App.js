import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import CreateArticle from "./pages/CreateArticle";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/articles" component={Articles} />
          <Route exact path="/articles/new" component={CreateArticle} />
          <Route exact path="/articles/:id" component={Article} />
        </Switch>
        <Redirect to="/articles" />
      </Router>
    </div>
  );
}

export default App;
