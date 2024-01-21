import { h } from "preact";
import Container from "./components/Container";
import Header from "./components/Header";
import Button from "./components/Button";
import TextArea from "./components/TextArea";
import Seprator from "./components/Seprator";

const App = () => {
  return (
    <Container>
      <Header />
      <img
        src="https://reelkart.blob.core.windows.net/reelkart/extra-stuff/PeriodicallyBanner.png"
        alt="banner for periodically"
        className="banner"
      />
      <TextArea />
      <Button />
      <Seprator />
    </Container>
  );
};
export default App;
