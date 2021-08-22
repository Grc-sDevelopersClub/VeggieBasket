import styled from "styled-components";
import Shop from "./component/Shop";
import Home from "./component/Home";
import Error from "./component/Error";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Container>
        <header>
          <h1>
          <a href="/">Home</a> <a href="/shop">Shop</a>
          </h1>
        </header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop" component={Shop} />
          <Route component={Error} />+
        </Switch>
      </Container>
    </div>
  );
};

export default App;

const Container = styled.section`
  ${"" /* background-color:red !important; */}
`;
