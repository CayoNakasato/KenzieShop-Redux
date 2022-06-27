import { Routes } from "./routes";
import { GlobalStyle } from "./styles/global";
import 'react-toastify/dist/ReactToastify.css';
import { Container } from "./style";

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Routes />
    </Container>
  );
}

export default App;
