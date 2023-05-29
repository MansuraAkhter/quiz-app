
import QuestionCard from "@/components/QuestionCard";
import { quizQuestions } from './../hooks/api';
import { Difficulty, QuestionState } from './../hooks/api';
import { useState } from 'react';

export type AnswerObject = {
  question: string,
  answer: string,
  correct: boolean,
  correctAnswer: string

}

const TOTAL_QUESTIONS = 10;

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startFetch = async () => {
    setLoading(true);
    setGameOver(false);

    try {
      const getQuestions = await quizQuestions(TOTAL_QUESTIONS, Difficulty.EASY);
      setQuestions(getQuestions);
    } catch (error) {
      console.log(error);
    }

    setScore(0);
    setNumber(0);
    setUserAnswers([]);
    setLoading(false);
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      if (correct) {
        setScore(score + 1);
      }
      //save the answer
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer
      }
      setUserAnswers((prev) => [...prev, answerObject]);

    }
  }

  const nextQuestion = () => {
    if ((number + 1) === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(number + 1);
    }
  }

  return (<main>
    <h1>React Quiz</h1>
    {gameOver || userAnswers.length === TOTAL_QUESTIONS ? <button onClick={startFetch}>Start</button> : null}

    {!gameOver ? <p>Score: {score}</p> : null}
    {loading && <p>Loading...</p>}
    {!loading && !gameOver ? <QuestionCard
      questionNum={number + 1}
      totalQuestions={TOTAL_QUESTIONS}
      question={questions[number]?.question}
      answers={questions[number]?.answers}
      userAnswer={userAnswers ? userAnswers[number] : undefined}
      callback={checkAnswer} /> : null}

    {!loading && !gameOver && userAnswers.length !== TOTAL_QUESTIONS ? (<button onClick={nextQuestion}>Next</button>) : null}

  </main>);
}

export default Home;