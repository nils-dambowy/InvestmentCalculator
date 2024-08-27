export default function Results(children) {
    return (
        <div>
            <table id="result">
                <thead id="thead">
                    <tr>
                        <th scope="col">Year</th>
                        <th scope="col">Investment Value</th>
                        <th scope="col">Interest (Yearly)</th>
                        <th scope="col">Total Interest</th>
                        <th scope="col">Invested Capital</th>
                    </tr>
                </thead>
                <tbody id="tbody">
                    <tr>
                        <td>2020</td>
                        <td>1000</td>
                        <td>10</td>
                        <td>1000</td>
                        <td>1000</td>
                    </tr>
                </tbody>
            </table>
        </div> 
    )
}