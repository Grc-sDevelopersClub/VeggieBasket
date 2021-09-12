import styled from "styled-components";
import Shop from "./component/Shop";
import Home from "./component/Home";
import Error from "./component/Error";
import Admin from "./component/Admin";
import Header from "./component/Header";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <AppView>
      <Header />
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop" component={Shop} />
          <Route path="/admin" component={Admin} />
          <Route component={Error} />
        </Switch>
      </Container>
    </AppView>
  );
};

export default App;

const AppView = styled.section`
  height: 100vh;
  width: 100vw;
  background-color: #fff;
  font-family: "Poppins", Arial, sans-serif;
`;

const Container = styled.section`
  padding-top: 100px;
`;
