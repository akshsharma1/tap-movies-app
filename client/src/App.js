import { Container } from "react-bootstrap";
import {BrowserRouter} from "react-router-dom";


import Header from "./components/Header";
import Router from "./Router";



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Router />
      </Container>
    </BrowserRouter>
  );
}

export default App;
