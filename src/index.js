import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";

import Routes from "./routes";

class App extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
