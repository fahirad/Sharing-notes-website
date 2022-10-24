import React from "react"
import ReactDOM from "react-dom"

// const element = <h1>Hello from Create React App</h1>

// ReactDom.render(element, document.getElementById("root"))

import Container from "./classBased/components/Container"
import "./classBased/App.css"

ReactDOM.render(
    <React.StrictMode>
        <Container />
    </React.StrictMode>,
    document.getElementById("root"))

