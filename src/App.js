import logo from './logo.svg';
import './App.css';
import 'web-components/dist/component-library/component-library.css';

import { defineCustomElements } from 'web-components/loader';
defineCustomElements();


function App() {
  return (
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
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <va-alert onFoo={() => console.log('foo')} onClose={() => console.log('closing')} closeable>
          Foo
        </va-alert>

      </header>
    </div>
  );
}

export default App;
