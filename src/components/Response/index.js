import { h, Fragment } from "preact";
import { useState, useEffect } from "preact/hooks";
import styles from "./Response.module.css";

const Response = ({ response }) => {
  const [words, setWords] = useState([]);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    // Split the response into words
    const wordsArray = response.split(/\s+/);

    // Simulate streaming effect with a delay of 1000 milliseconds (1 second)
    const intervalId = setInterval(() => {
      setWords((prevWords) => [...prevWords, wordsArray[wordIndex]]);
      setWordIndex((prevIndex) => prevIndex + 1);

      // Stop streaming when all words are displayed
      if (wordIndex === wordsArray.length - 1) {
        clearInterval(intervalId);
      }
    }, 100);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, [response, wordIndex]);

  return (
    <div className={styles.responseContainer}>
      <p className={styles.responsePara}>
        {words.map((word, index) => (
          <Fragment key={index}>
            {index > 0 && " "} {word}
          </Fragment>
        ))}
      </p>
    </div>
  );
};

export default Response;
