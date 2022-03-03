import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import { FrontPage } from "../quizApp.jsx";
import { Simulate } from "react-dom/test-utils";

const question = {
  question: "Are you happy?",
  answers: {
    answer_a: "Yes",
    answer_b: "No",
    answer_c: "Maybe",
  },
  correct_answers: {
    answer_a_correct: "true",
    answer_b_correct: "false",
    answer_c_correct: "false",
  },
};

describe("quiz application", () => {
  it("shows front page"),
    () => {
      const element = document.createElement("div");
      ReactDOM.render(<FrontPage />, element);

      expect(element.querySelector("h1").innerHTML).toEqual("TIME FOR QUIZ!");
    };
});

// describe("front page", () => {
//   it("shows question", () => {
//     const element = document.createElement("div");
//     ReactDOM.render(
//       <MemoryRouter initialEntries={["/question"]}>
//         <QuestionContext.Provider value={{ randomQuestion: () => question }}>
//           <Application />
//         </QuestionContext.Provider>
//       </MemoryRouter>,
//       element
//     );
//     expect(element.innerHTML).toMatchSnapshot();
//   });
// });
