import React from "react";


const Square = (Props) => {
    return (
        <div
        onClick = {Props.onClick}
        className="square">
            <h5>{Props.value}</h5>

        </div>
    );
};

export default Square;