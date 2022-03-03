import React, { useState } from "react";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { isCorrectAnswer, randomQuestion } from "../server/questions.js";
// import { useContext } from "../dist/index.d240bd5c";

// export const QuestionContext = React.createContext({ randomQuestion });

export function FrontPage() {
  return (
    <div>
      <h1>TIME FOR QUIZ!</h1>
      <p></p>
      <Link to={"/question"}>
        <button>Answer a question!</button>
      </Link>
    </div>
  );
}

function ShowQuestion(question) {
  //const navigate = useNavigate();
  //const { randomQuestion } = useContext(QuestionContext);
  //const [question] = useState(randomQuestion());

  async function handleAnswer(answer) {
    const {id} = question;
    const res = await fetch("/api/question", {
        method: "post",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({id, answer}),
    });
  }

  return (
    <>
      <h2>Can you answer this question? ...</h2>
      <h1>{question.question}</h1>
      <div>
        {Object.keys(question.answers)
          .filter((a) => question.answers[a])
          .map((a) => (
            <p key={a}>
              <input type={"radio"} name={"answerChoice"} value={a} />
              <label>{question.answers[a]}</label>
            </p>
          ))}
        <button
          onClick={() =>
            handleAnswer(
              document.querySelector('input[name="answerChoice"]:checked').value
            )
          }
        >
          Answer
        </button>
        <p></p>
        <div>
          <Link to={"/"}>
            <button>Back to front page</button>
          </Link>
        </div>
      </div>
    </>
  );
}

function QuestionComponent(){
    const [question, setQuestion] = useState();

    async function handleLoadQuestion(){
        const res = await fetch("api/question");
        setQuestion(await res.json());
    }

    if(!question){
        return (
            <div>
                <button onClick={handleLoadQuestion}>New Question</button>
            </div>
        );
    }

    return <ShowQuestion question={question} />;

}

function ShowAnswer() {
  return (
    <div>
      <Routes>
        <Route
          path={"/correct"}
          element={<h1>YAY, you answered correctly!</h1>}
        />
        <Route
          path={"/wrong"}
          element={<h1>Whoops! The answer was wrong!</h1>}
        />
      </Routes>
      <div>
        <Link to={"/question"}>
          <button>Answer another question!</button>
        </Link>
      </div>
      <p></p>
      <div>
        <Link to={"/"}>
          <button>Back to front page</button>
        </Link>
      </div>
    </div>
  );
}

export function QuizApp() {
  return (
    <Routes>
      <Route path={"/"} element={<FrontPage />} />
      <Route path={"/question"} element={<QuestionComponent />} />
      <Route path={"/answer/*"} element={<ShowAnswer />} />
      <Route path={"*"} element={<h1>Not found</h1>} />
    </Routes>
  );
}
