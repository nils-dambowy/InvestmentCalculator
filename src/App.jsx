
import Header from "./components/Header.jsx"
import InputField from './components/InputField.jsx'
import Results from './components/Results.jsx'

import { useState } from 'react';

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration > 0;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
            return {
                ...prevUserInput,
                [inputIdentifier]: +newValue,
            };
    });
  }


  return (
    <div>
      <Header/>
      <main>
        <InputField userInput={userInput} onChangeInput={handleChange}/>
        { !inputIsValid && <p class="center">Please enter a valid duration</p>}
        { inputIsValid && <Results userInput={userInput}/>}
      </main>
    </div>
  )
}

export default App
