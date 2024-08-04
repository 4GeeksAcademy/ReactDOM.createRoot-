import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";

const SecondsCounter = ({ digitoUno, digitoDos, digitoTres, digitoCuatro, digitoCinco, digitoSeis }) => {
    return (
        <div className="seconds-counter">
            <div className="clock-icon">
                <FontAwesomeIcon icon={faClock} />
            </div>
            <div className="digit">{digitoSeis}</div>
            <div className="digit">{digitoCinco}</div>
            <div className="digit">{digitoCuatro}</div>
            <div className="digit">{digitoTres}</div>
            <div className="digit">{digitoDos}</div>
            <div className="digit">{digitoUno}</div>
        </div>
    );
};

export default SecondsCounter;
