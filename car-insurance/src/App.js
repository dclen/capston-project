import "./App.css";
import Create from "./components/Create/Create";
import Read from "./components/Read/Read";
import Update from "./components/Update/Update";
import { Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Container>
        <div className="App">
          <div>
            <h1>Car Insurance</h1>
          </div>
          <div>
            <Route exact path="/" component={Create} />
          </div>
          <div style={{ marginTop: 25 }}>
            <Route exact path="/read" component={Read} />
          </div>
          <div>
            <Route path="/update" component={Update} />
          </div>
        </div>
      </Container>
    </BrowserRouter>
  );
}

export default App;
