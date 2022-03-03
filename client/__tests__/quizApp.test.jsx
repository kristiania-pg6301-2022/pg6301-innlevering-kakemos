import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import { FrontPage } from "../quizApp.jsx";

// testene vil ikke kjøre, da vi får error vi ikke klarer å løse.
// Det ble derfor vanskelig å skrive flere tester

const question = {
  question: "What is 2 + 2?",
  answers: {
    answer_a: "22",
    answer_b: "4",
    answer_c: "3",
  },
  correct_answers: {
    answer_a_correct: "false",
    answer_b_correct: "true",
    answer_c_correct: "false",
  },
};

describe("quiz application", () => {
  it("shows front page", () => {
    const element = document.createElement("div");
    ReactDOM.render(<FrontPage />, element);

    expect(element.querySelector("h1").innerHTML).toEqual("TIME FOR QUIZ!");
    expect(element.innerHTML).toMatchSnapshot();
  });

  it("shows question", () => {
    const element = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter initialEntries={["/question"]}>
        <QuestionContext.Provider value={{ randomQuestion: () => question }}>
          <Application />
        </QuestionContext.Provider>
      </MemoryRouter>,
      element
    );
    expect(element.innerHTML).toMatchSnapshot();
  });
});
