import React from "react";
import {render} from 'react-dom';
import Home from "./components/Home";

let loadPage = () => {
    
    render(<Home />, document.getElementById("root"));
}

window.onload = () => {
    loadPage();
}
