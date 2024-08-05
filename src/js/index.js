//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import '@fortawesome/fontawesome-free/css/all.min.css';
import SecondsCounter from "./component/home.jsx";

let digits = [0, 0, 0, 0, 0, 0];

const updateCounter = () => {
    let shouldContinue = true;
    
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            shouldContinue = false;
            break;
        } else {
            digits[i] = 9;
        }
    }

    if (shouldContinue) {
        digits = [0, 0, 0, 0, 0, 0];
    }

    ReactDOM.createRoot(document.getElementById('app')).render(
        <SecondsCounter 
            digitoUno={digits[5]} 
            digitoDos={digits[4]} 
            digitoTres={digits[3]} 
            digitoCuatro={digits[2]} 
            digitoCinco={digits[1]} 
            digitoSeis={digits[0]} 
        />
    );
};

setInterval(updateCounter, 1000);