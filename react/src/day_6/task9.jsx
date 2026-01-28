import { useState } from "react";

function RandomQuote() {
  const quotes = [
    "The best way to get started is to quit talking and begin doing.",
    "Don't let yesterday take up too much of today.",
    "It's not whether you get knocked down, it's whether you get up.",
    "Success is not in what you have, but who you are."
  ];

  const [quote, setQuote] = useState(quotes[0]);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px", padding: "20px" }}>
      <h2>Random Quote Generator</h2>
      <p style={{ fontStyle: "italic", margin: "20px 0" }}>{quote}</p>
      <button onClick={getRandomQuote}>New Quote</button>
    </div>
  );
}

export default RandomQuote;
