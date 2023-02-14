import { useEffect, useState } from "react";
import "./practiseApp.scss";
import QuoteApp from "./quote/quoteApp";
const PractiseApp = () => {
  const [quote, setQuote] = useState("");
  const [color, setColor] = useState("red");
  console.log(quote);
  useEffect(() => {
    getQuote();
  }, []);
  function getQuote() {
    const randomNumber = Math.floor(Math.random() * 200);
    fetch("https://jsonplaceholder.typicode.com/todos/" + randomNumber)
      .then((res) => res.json())
      .then((data) => {
        setQuote(data);
        setColor(generateColor());
      });
  }
  function generateColor() {
    function col() {
      const hex = Math.floor(Math.random() * 255).toString(16);
      return ("0" + String(hex)).substr(-2);
    }
    return "#" + col() + col() + col();
  }
  return (
    <div style={{ height: "100vh", widht: "100vw", backgroundColor: color }}>
      <QuoteApp quote={quote} onQuote={getQuote} />
    </div>
  );
};

export default PractiseApp;
