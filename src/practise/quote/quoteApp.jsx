import "./quote-app.scss";
const QuoteApp = ({ quote, onQuote }) => {
  return (
    <div className="quote-app">
      <h3>{quote?.title}</h3>
      <button onClick={onQuote}>Generate Quote</button>
    </div>
  );
};

export default QuoteApp;
