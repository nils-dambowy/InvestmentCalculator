
export default function InputField({ onChangeInput, userInput}) {
    
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                <label >Initial Investment</label>
                <input required value={userInput.initialInvestment}  onChange={e => onChangeInput("initialInvestment", e.target.value)} type="number"/>
                </p>
                <p>
                <label > Annual Investment </label>
                <input required value={userInput.annualInvestment} onChange={e => onChangeInput("annualInvestment", e.target.value)} type="number"/>
                </p>
            </div>
            <div className="input-group">
                <p>
                <label >Expected return</label>
                <input required value={userInput.expectedReturn} onChange={e => onChangeInput("expectedReturn", e.target.value)} type="number"/>
                </p>
                <p>
                <label >Duration</label>
                <input required value={userInput.duration} onChange={e => onChangeInput("duration", e.target.value)} type="number"/>
                </p>
            </div>
           
        </section>
    )
}