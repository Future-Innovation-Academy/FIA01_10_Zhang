import React from "react";

const Add = ({ addData, handleInputChange, titleValue }) => {
    return (
        <div class="container-sm">
            {/* このあとuseStateを新しく記述します🤗 */}
            <p>{titleValue}</p>
            <div class="input-group mb-3">
                <input type="text" value={titleValue} onChange={handleInputChange} class="form-control" placeholder="message"></input>
                <button onClick={addData} className="btn btn-dark">送信</button>
            </div>

        </div>
    );
};

export default Add;