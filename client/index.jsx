import React from "react";
import ReactDOM from "react-dom";
import { QuizApp } from "./quizApp";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(<BrowserRouter><QuizApp /></BrowserRouter>, document.getElementById("app"));