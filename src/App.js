import { h } from "preact";
import Container from "./components/Container";
import Header from "./components/Header";
import Button from "./components/Button";
import TextArea from "./components/TextArea";

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
      <div className="bg">
        <div className="para">This is my extension in preact</div>
      </div>
    </Container>
  );
};
export default App;
