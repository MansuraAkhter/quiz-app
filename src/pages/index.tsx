
import QuestionCard from "@/components/QuestionCard";
import { quizQuestions } from './../hooks/api';
import { Difficulty } from './../hooks/api';
import { useState } from 'react';

type AnswerObject = {
  question: string,
  answer: string,
  correct: boolean,
  correctAnswer: string

}

const TOTAL_QUESTIONS = 10;

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(quizQuestions(TOTAL_QUESTIONS, Difficulty.EASY))

  const startFetch = async () => {
    setLoading(true);
    setGameOver(false);

    const getQuestions = await quizQuestions(TOTAL_QUESTIONS, Difficulty.EASY);
    setQuestions(newQuestions);
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }
  return (<main>
    <h1>React Quiz</h1>
    <button onClick={startFetch}>Start</button>
    <p>Score</p>
    <p>Loading...</p>
    {/* <QuestionCard
      questionNum={number + 1}
      totalQuestions={TOTAL_QUESTIONS}
      question={questions[number].question}
      answers={questions[number].answers}
      userAnswer={userAnswers ? userAnswers[number] : undefined}
      callback={checkAnswer} /> */}
    <button onClick={nextQuestion}>Next</button>
  </main>);
}

export default Home;