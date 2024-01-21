import { h } from "preact";
import Container from "./components/Container";
import Header from "./components/Header";

const App = () => {
  return (
    <Container>
      <Header />
      <div className="bg">
        <div className="para">This is my extension in preact</div>
      </div>
    </Container>
  );
};
export default App;
