import styled from "styled-components";
import Header from "./components/header";
import Main from "./components/main";

const FalseBody = styled.div`
    text-align: center;
`;

function App() {

    document.body.style = "background-color: #C6ECED;";

    return (
        <FalseBody>

            <Header />

            <Main />
            
        </FalseBody>
  );
}

export default App;
