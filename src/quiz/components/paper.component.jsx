const Paper = ({ questions }) => {
  function renderAnswer(correct, incorrects) {
    const options = [correct, ...incorrects];
    console.log(options);
  }
  console.log(questions);
  return (
    <div>
      <h1>Paper</h1>
      {questions.map(
        ({ question, correct_answer, incorrect_answers }, index) => (
          <>
            <h4 key={index}>{question}</h4>
            <p>{renderAnswer(correct_answer, incorrect_answers)}</p>
          </>
        )
      )}
    </div>
  );
};

export default Paper;
