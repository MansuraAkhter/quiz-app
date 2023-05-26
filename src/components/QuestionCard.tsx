type QuestionCardProps = {
    question: string;
    answers: string[];
    callback: any;
    userAnswer: any;
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
        {answers.map((answer) => (
            <div>
                <button disabled={userAnswer}>{answer}</button>
            </div>
        ))}

    </div>);
}

export default QuestionCard;