import React, {useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function FrontPage() {
    return null;
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