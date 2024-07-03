import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
      /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
       */
      <div className="container">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand mx-2" href="#"> <img src={`${process.env.PUBLIC_URL}/images/calendar-week.svg`} height="30"/> Fake Company Name</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Roles
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">User</a></li>
                    <li><a className="dropdown-item" href="#">Technician</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="#">Administrator</a></li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <button className="btn btn-primary mx-2" type="submit">Sign In</button>
                <button className="btn btn-outline-primary mx-2" type="submit">Sign Up</button>
              </form>
            </div>
          </div>
        </nav>

      </div>
  );
}

export default App;
