import { calculateInvestmentResults, formatter } from '../util/investment.js';
 
export default function Results({ userInput}) {

    const calculations = calculateInvestmentResults(userInput);

    const initialInvestment = 
    calculations[0].valueEndOfYear - 
    calculations[0].annualInvestment - 
    calculations[0].interest;

    return (
            <table id="result">
                <thead id="thead">
                    <tr>
                        <th scope="col">Years</th>
                        <th scope="col">Investment Value</th>
                        <th scope="col">Interest (Yearly)</th>
                        <th scope="col">Total Interest</th>
                        <th scope="col">Invested Capital</th>
                    </tr>
                </thead>
                <tbody id="tbody">
                    {calculations.map( (yearData) => {
                        
                        const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment;
                        const totalInvested = yearData.valueEndOfYear - totalInterest;
                        return (
                        <tr key={yearData.year}>
                            <td>{yearData.year}</td>
                            <td>{formatter.format(yearData.valueEndOfYear)}</td>
                            <td>{formatter.format(yearData.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(totalInvested)}</td>
                        </tr>);
                    })}
                </tbody>
            </table>
    )
}