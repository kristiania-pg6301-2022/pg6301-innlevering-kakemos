import React, { useState, useEffect } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { randomQuestion } from "../server/questions.js";

export const QuestionContext = React.createContext({ randomQuestion });

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

function useLoading(loadingFunction) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [data, setData] = useState();

  async function load() {
    setLoading(true);
    try {
      setData(await loadingFunction());
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  return { loading, error, data };
}

export class HttpError extends Error {
  constructor(status, statusText) {
    super(statusText);
    this.status = status;
  }
}

export async function fetchJSON(url) {
  const res = await fetch(url);
  if (res.status === 204) {
    return null;
  } else if (res.ok) {
    return await res.json();
  } else {
    throw new HttpError(res.status, res.statusText);
  }
}

// async function fetchJSON(url) {
//   const res = await fetch(url);
//   if (!res.ok) {
//     throw new Error(`Failed to load ${res.status}: ${res.statusText}`);
//   }
//   return await res.json();
// }

function ShowQuestion() {
  const { loading, error, data } = useLoading(async () =>
    fetchJSON("/api/question")
  );
  const navigate = useNavigate();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading question: {error.toString()}</div>;

  const { id, question, answers } = data;

  async function handleAnswer(answer) {
    const response = await fetch("/api/question", {
      method: "post",
      body: JSON.stringify({ id, answer }),
      headers: { "content-type": "application/json" },
    });
    const result = await response.json();

    if (result.result === "true") {
      navigate("/answer/correct");
      return <ShowAnswer question={question} answer={answer} />;
    } else {
      navigate("/answer/wrong");
      return <ShowAnswer question={question} answer={answer} />;
    }
  }

  return (
    <>
      <h2>Can you answer this question? ...</h2>
      <h1>{question}</h1>
      <div>
        {Object.keys(answers)
          .filter((a) => answers[a])
          .map((a) => (
            <p key={a}>
              <input type={"radio"} name={"answerChoice"} value={a} />
              <label>{answers[a]}</label>
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
      <Route path={"/question"} element={<ShowQuestion />} />
      <Route path={"/answer/*"} element={<ShowAnswer />} />
      <Route path={"*"} element={<h1>Not found</h1>} />
    </Routes>
  );
}
