//Create Header including responsive navbar Cart 
//Create Footer
import styled from "styled-components";
import Header from "./components/Header";

const AppWrapper = styled.section`
padding: 2% 3%;
`;

function App() {
  return (
    <AppWrapper>
    <div className="App">
    <Header/>
    <h1>Hello</h1>
    </div>
    </AppWrapper>
  );
}

export default App;

