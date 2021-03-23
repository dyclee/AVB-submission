// import logo from './logo.svg';
import './styling/App.css';
import './styling/contacts.css';
import {Dashboard} from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <div className="middle">
        <Dashboard />
      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Re
        </a>
      </header> */}
    </div>
  );
}

export default App;
