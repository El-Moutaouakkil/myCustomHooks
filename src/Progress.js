import React, { useEffect, useState } from "react";

const Progress = ({ max }) => {
    console.count("I render ");
    const [valeur, setValeur] = useState(0);

    useEffect(() => {
		let timer;
        if (valeur < 100) {
            timer = setTimeout(() => {
                setValeur((prevValue) => prevValue + 1);
            }, 300);
        }
		return timer;
    });

    return (
        <div>
            <progress
                style={{ transition: "all 1s linear" }}
                value={valeur}
                max={max}></progress>
        </div>
    );
};

export default Progress;
