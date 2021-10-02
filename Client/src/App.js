//Create Header including responsive navbar Cart
//Create Footer
import styled from "styled-components";
import Header from "./components/Header";
import "./index.css";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Offers from "./components/Offers";
import Shop from "./components/Shop";
import Cart from "./components/Cart";

const AppWrapper = styled.div`
  font-family: sans-sarif;
  margin: 0;
  padding: 0;
`;

const AppView = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #fff;
`;

const Content = styled.div`
  padding: 100px 3%;
`;
function App() {
  return (
    <AppWrapper>
      <AppView>
        <Header />
        <Content>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/offers" component={Offers} />
            <Route path="/shop" component={Shop} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </Content>
      </AppView>
    </AppWrapper>
  );
}

export default App;
