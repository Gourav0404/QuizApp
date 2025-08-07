import React, { useState } from 'react';
import QuizJson from '../api/quizeJson.json';

const QuizComponent = ({ showScreen, setShowScreen, answers, setAnswers }) => {
  const [index, setIndex] = useState(0);
  const quiz = QuizJson[index];



  const handleIndex = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  }
  const existAnswer = answers.find((option, i) => option.id == quiz.id);
  const addAnswer = (id, answer) => {
    const existAnswer = answers.find((option, i) => option.id == id);

    if (existAnswer) {
      const newAnswers = answers.map((option, i) => {
        if (option.id == id) {
          option['answer'] = answer;
        }
        return option;
      });
      setAnswers(newAnswers);
      return;
    }
    setAnswers([
      ...answers,
      { id, answer }
    ]);
  }
  return (
    <div className='card py-4 px-3'>
     
      <h4>{quiz.id}.  {quiz.question}</h4>
      <div className='d-flex flex-column py-3'>

        {quiz.options.map((option, i) => {
          return <label key={i} htmlFor={option}>
            <input onChange={() => addAnswer(quiz.id, i)} checked={existAnswer?.answer === i} type="radio" id={option} name='answer' value={option} />  {option}
          </label>
        })}
        <div className="mb-4">
          <button disabled={index == 0} onClick={handleIndex} className='btn btn-danger mt-3 mx-1 px-5'>
            prev
          </button>
          <button disabled={index >= QuizJson.length - 1} onClick={() => setIndex(index + 1)} className='btn btn-primary mt-3 mx-1 px-5'>
            Next
          </button>
          {
            QuizJson.length - 1 === index && <button onClick={() => setShowScreen('result')} className='btn btn-success mt-3 mx-1 px-5'>
              Submit Quiz
            </button>
          }

        </div>
      </div>
    </div>
  );
}

export default QuizComponent;
