export default function InputField(children) {
    return (
        <div id="user-input">
            <div id="input-group">
                <div>
                    <label >Initial Investment</label>
                    <input type="number"/>
                    <label >Annual Investment</label>
                    <input type="number" />
                </div>
                <div>
                    <label >Expected return</label>
                    <input type="number"/>
                    <label >Duration</label>
                    <input type="number" />
                </div>
            </div>
        </div>

        

    )
}