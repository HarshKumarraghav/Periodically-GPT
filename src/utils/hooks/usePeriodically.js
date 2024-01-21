import { useState } from "preact/hooks";
export const usePeriodically = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [response, setResponse] = useState("");
  const fetchPeriodicallyResponseHandler = async (message) => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "text/plain");
    const raw = JSON.stringify({
      fileId: "clrmgydhc0001i8081ztqm3fz",
      message: message,
    });
    console.log("Raw", raw);
    try {
      setLoading(true);
      const response = await fetch(
        "https://infinidocs.harshraghav.tech/api/chat",
        {
          method: "POST",
          body: raw,
          headers: myHeaders,
        }
      );
      const data = await response.text();
      setResponse(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    response,
    error,
    fetchPeriodicallyResponseHandler,
  };
};
