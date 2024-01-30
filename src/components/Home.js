import React, { useMemo, useRef, useState } from "react";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";
import Cell from "./Cell";

const Home = () => {
    const { logout, user } = useAuth();
    // const [show, setShow] = useState(false);
    // const handleShow = () => {
    //     setShow((prev) => !prev);
    // };
    const [beginRow, setBeginRow] = useState(0);
    const [beginCol, setBeginCol] = useState(0);
    const ref = useRef(null);
    const array = Array.from(Array(365).keys());
    const array2 = useMemo(() => {
        const list = [];
        for (let i = 0; i < 300; i++) list.push(array.map((x) => `${x}-${i}`));
        return list;
    }, [array]);
    const handleScroll = (e) => {
        const top = e.target.scrollTop;
        const left = e.target.scrollLeft;
        setBeginRow(Math.floor(top / rowHeight));
        setBeginCol(Math.floor(left / colWidth));
    };
    const maxHeight = 230;
    const maxWidth = 300;
    const rowHeight = 56;
    const colWidth = 42;
    const numberOfRow = Math.round(maxHeight / rowHeight);
    const numberOfCol = Math.round(maxWidth / colWidth);
    const scrollTest = () => {
        if (ref.current) {
            ref.current.scrollTo(0, rowHeight * (beginRow + 1));
        }
    };
    return (
        <div>
            <div>Home</div>
            <div>
                <Link to={"/about"}>
                    <button>About</button>
                </Link>
            </div>
            <button onClick={logout}>Logout</button>
            <div>
                <button onClick={scrollTest}>Show</button>
            </div>
            <div>{user?.role}</div>
            {/* {show && ( */}
            <div
                style={{
                    maxHeight: `${maxHeight - 30}px`,
                    maxWidth: "300px",
                    overflow: "auto",
                }}
                onScroll={handleScroll}
                ref={ref}
            >
                <table>
                    <thead
                        style={{
                            position: "sticky",
                            top: 0,
                            background: "#abc",
                        }}
                    >
                        <tr>
                            <th>first</th>
                            <th colSpan={364}>second</th>
                        </tr>
                    </thead>
                    <tbody>
                        {array2.map((array, index) => {
                            if (
                                index >= beginRow - 1 &&
                                index <= beginRow + numberOfRow + 1
                            )
                                return (
                                    <tr key={index}>
                                        {array.map((item, colIndex) => {
                                            if (
                                                colIndex >= beginCol - 1 &&
                                                colIndex <=
                                                    beginCol + numberOfCol + 1
                                            )
                                                return (
                                                    <Cell
                                                        key={item}
                                                        index={item}
                                                    />
                                                );
                                            return (
                                                <td
                                                    key={item}
                                                    style={{
                                                        border: "1px solid #ccc",
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            width: `37px`,
                                                        }}
                                                    ></div>
                                                </td>
                                            );
                                        })}
                                    </tr>
                                );
                            return (
                                <tr
                                    key={index}
                                    style={{ height: `${rowHeight - 2}px` }}
                                ></tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            {/* )} */}
        </div>
    );
};

export default Home;
