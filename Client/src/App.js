import logo from './logo.svg';
import styled from 'styled-components';


function App() {
  return (
    <div className="App">
    <Container>
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
      </header>
      </Container>
    </div>
  );
}

export default App;


const Container= styled.section`
  background-color:red !important;
`;