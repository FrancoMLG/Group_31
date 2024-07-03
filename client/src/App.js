import logo from "./logo.svg";
import 'bootstrap/dist/css/bootstrap.min.css';
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
      <div className="container-fluid">
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
                <button className="btn btn-outline-secondary mx-2" type="submit">Sign Up</button>
              </form>
            </div>
          </div>
        </nav>

        <div className="container col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              // fixme: add a better image, maybe of finished product?
              <img src={`${process.env.PUBLIC_URL}/images/calendar-week.svg`} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
            </div>
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">The IT Help Desk Solution You Need</h1>
              <p className="lead">Forget about manually scheduling appointments for your users. Our system will automatically handle the scheduling and assigning of appointments to
                your employees based on the needs of your users, as well as including a host of additional features including live chat, powerful administrative privileges, and an
                easy to user dashboard for all of your employees.
                </p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Sign In</button>
                <button type="button" className="btn btn-outline-secondary btn-lg px-4">Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
