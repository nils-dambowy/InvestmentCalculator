import { useState } from 'react';

export default function InputField(children) {

    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10,
      });
      
      function handleChange(inputIdentifier, newValue) {
            setUserInput((prevUserInput) => {
                    return {
                        ...prevUserInput,
                        [inputIdentifier]: newValue,
                    };
            });
      }
    
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                <label >Initial Investment</label>
                <input required value={userInput.initialInvestment}  onChange={e => handleChange("initialInvestment", e.target.value)} type="number"/>
                </p>
                <p>
                <label > Annual Investment </label>
                <input required value={userInput.annualInvestment} onChange={e => handleChange("annualInvestment", e.target.value)} type="number"/>
                </p>
            </div>
            <div className="input-group">
                <p>
                <label >Expected return</label>
                <input required value={userInput.expectedReturn} onChange={e => handleChange("expectedReturn", e.target.value)} type="number"/>
                </p>
                <p>
                <label >Duration</label>
                <input required value={userInput.duration} onChange={e => handleChange("duration", e.target.value)} type="number"/>
                </p>
            </div>
           
        </section>
    )
}