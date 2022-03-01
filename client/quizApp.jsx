import React, {useState} from "react";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";

function FrontPage() {
    return <div>
        <h1>TIME FOR QUIZ!</h1>
        <p></p><Link to={"/question"}>
        <button>Answer a question!</button>
    </Link>
    </div>
}

function ShowQuestion() {
    return null;
}

export function QuizApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<FrontPage/>}/>
                <Route path="/question" element={<ShowQuestion/>}/>
            </Routes>
        </BrowserRouter>
    );
}