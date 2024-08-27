import headerImage from "../assets/investment-calculator-logo.png"

export default function Header(children) {
    return (
        <div id="header">
            <img src={headerImage}/>
            <h1>Investment Calculator</h1>
        </div>
    )
}