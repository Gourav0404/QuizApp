import React, { useState } from 'react';
import WelComponent from './components/WelComponent';
import QuizComponent from './components/QuizComponent';
import ResultComponent from './components/ResultComponent';

const App = () => {
  const [showScreen, setShowScreen] = useState('welcome');
  const [answers, setAnswers] = useState([]);
  return (
    <div className='container py-5'>
      {
        showScreen === 'welcome' &&
        <WelComponent  {...{ showScreen, setShowScreen }} />
      }
      {showScreen === 'quiz' && <QuizComponent  {...{ showScreen, setShowScreen }} {...{ answers, setAnswers }} />}
      {showScreen === 'result' && <ResultComponent  {...{ answers, setAnswers }} />}
    </div>
  );
}

export default App;
