import React from "react";

const Cell = ({ index }) => {
    // console.log(index);
    return (
        <td
            style={{
                border: "1px solid #ccc",
            }}
        >
            <div style={{ width: "37px", height: "52px" }}>{index}</div>
        </td>
    );
};

export default Cell;
