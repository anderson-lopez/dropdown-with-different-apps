import styled from "styled-components";
import Layout from "./Components/Layout";


const Cotainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Cotainer>
      <Layout/>
    </Cotainer>
  );
}

export default App;
