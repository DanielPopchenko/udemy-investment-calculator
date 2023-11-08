import React, { useState } from 'react';
import Header from './components/header/Header';
import InputsGroup from './components/inputsGroup/InputsGroup';
import Result from './components/Result';

const App = () => {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  const handleChange = (inputIdentifier, newValue) => {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        //  ! Преобразовываем строку из ивента в число тут, потому что это универсальная функция
        //  ! и мне не надо будет везде ставить знак +
        [inputIdentifier]: +newValue,
      };
    });
  };

  return (
    <div>
      <Header />
      <InputsGroup userInput={userInput} setInput={handleChange} />
      {inputIsValid ? (
        <Result userInput={userInput} />
      ) : (
        <p className="centered">Enter a duration greater than 0.</p>
      )}
    </div>
  );
};

export default App;
