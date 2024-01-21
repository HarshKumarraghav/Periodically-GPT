import { h } from "preact";
import Container from "./components/Container";
import Header from "./components/Header";
import Button from "./components/Button";
import TextArea from "./components/TextArea";
import Seprator from "./components/Seprator";
import { usePeriodically } from "./utils/hooks/usePeriodically";
import { useState } from "preact/hooks";
import Response from "./components/Response";
import Loader from "./components/Loader";

const App = () => {
  const [prompt, setPrompt] = useState("");
  const { loading, error, response, fetchPeriodicallyResponseHandler } =
    usePeriodically();
  const onChange = (event) => {
    setPrompt(event.target.value);
  };

  return (
    <Container>
      <Header />
      <img
        src="https://reelkart.blob.core.windows.net/reelkart/extra-stuff/PeriodicallyBanner.png"
        alt="banner for periodically"
        className="banner"
      />
      <TextArea onChange={onChange} />
      <Button onClick={() => fetchPeriodicallyResponseHandler(prompt)} />
      <Seprator />
      {!prompt ? null : (
        <div>
          {loading ? <Loader /> : <Response response={response} />}
          {error && <Response response={error} />}
        </div>
      )}
    </Container>
  );
};
export default App;
