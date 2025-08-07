import React from 'react';

const WelComponent = ({ showScreen, setShowScreen }) => {
  return (
    <>
      <div className='card py-4 px-3'>
        <h1 className='text-center'>Welcome Quiz App</h1>
        <div className='d-flex align-items-center justify-content-center'>
          <button onClick={() => setShowScreen('quiz')} className='btn btn-danger mt-3 px-5'>
            start quiz
          </button>
        </div>
      </div>
    </>
  );
}

export default WelComponent;
