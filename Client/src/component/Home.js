import styled from "styled-components";

const Home = () => {
  return (
    <Container>
      <h1>
       This is Home Page
      </h1>
    </Container>
  );
};

const Container = styled.section`
  padding: 4% 4%;
  h1 {
    color: red;
    a {
      color: green;
    }
  }
`;

export default Home;
