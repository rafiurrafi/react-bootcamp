import { useState } from "react";

const QuizApp = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [startXm, setStartXm] = useState(false);
  function handleGetQues() {
    setLoading(true);
    fetch("https://opentdb.com/api.php?amount=10")
      .then((respons) => respons.json())
      .then((data) => {
        setQuestions(data.results);
        setLoading(false);
        setStartXm(true);
      });
  }
  return (
    <div>
      {!startXm ? (
        <>
          <h1>Quiz app</h1>
          <button onClick={handleGetQues}>
            {loading ? "Loading" : <span>Start quiz</span>}
          </button>
        </>
      ) : (
        <h1>xm started</h1>
      )}
    </div>
  );
};

export default QuizApp;
