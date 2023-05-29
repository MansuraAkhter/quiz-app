import { AnswerObject } from '../pages/index';

type QuestionCardProps = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNum: number;
    totalQuestions: number;
}

const QuestionCard = ({
    question,
    answers,
    callback,
    userAnswer,
    questionNum,
    totalQuestions
}: QuestionCardProps) => {
    return (<div>
        <h1>Question: {questionNum}/{totalQuestions}</h1>
        <p>{question}</p>
        {answers?.map((answer) => (
            <div key={answer}>
                {/* why onclick gets current target not target */}
                <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>{answer}</button>
            </div>
        ))}

    </div>);
}

export default QuestionCard;