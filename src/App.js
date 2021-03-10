import logo from './logo.svg';
import './App.css';

import Footer from './components/footer/Footer'

function App() {

  var name = 'Eric';
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hey {name}.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
          <Footer />
      </header>

    </div>
  );
}

export default App;
