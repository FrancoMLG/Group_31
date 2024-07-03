import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css";
import Home from"./components/Home"

function App() {
  return (

      <Router>
      <div className="App">
        <Home />
        {/*
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
        */}
      </div>
    </Router>

  );
}

export default App;
