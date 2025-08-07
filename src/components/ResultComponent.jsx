import React from 'react';
import QuizJson from '../api/quizeJson.json';

const ResultComponent = ({ answers, setAnswers }) => {
  const totalQuestion = QuizJson.length;
  const attempt_question = answers.length;
  const total_correct = answers.length > 0 ? answers.filter((cur, i) => {
    const quiz = QuizJson.find(q => q.id === cur.id);
    return quiz.options[cur.answer] === quiz.answer;
  }) : [];
  const total_incorrect = answers.length > 0 ? answers.filter((cur, i) => {
    const quiz = QuizJson.find(q => q.id === cur.id);
    return quiz.options[cur.answer] !== quiz.answer;
  }) : [];

  const percent = (total_correct.length / attempt_question) * 100;
  return (
    <div className='card py-4 px-3'>
      
      <h1 className='text-center'> You Got {total_correct.length}/{totalQuestion}</h1>
      <h3 className='text-center'>{percent}%</h3>

      <div className="row gx-3 px-4 py-5">
        <div className="col-sm-6">
          <div className='card px-4 py-4'>
            <h2>Total Correct : {total_correct.length}</h2>

          </div>
        </div>
        <div className="col-sm-6">
          <div className="card px-4 py-4">
            <h2> Total Incorrect : {total_incorrect.length}</h2>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <button onClick={() => window.location.reload()} className='btn px-4 btn-success'> Re Start</button>
      </div>
    </div>
  );
}

export default ResultComponent;
