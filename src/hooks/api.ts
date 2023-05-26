//enum is a special data type that enables for a variable to be a set of predefined constants. 
//the variable must be equal to one of the values predefined for it
import axios from 'axios';
import { shuffleArray } from '@/utils';

export type Question = {
    category:string;
    correct_answer:string;
    difficulty:string;
    incorrect_answers:string[];
    question:string;
    type:string;

}

export type QuestionState = Question & {answers:string[]}

export enum Difficulty{
    EASY='easy',
    MEDIUM = 'medium',
    HARD ='hard',
}

export const quizQuestions = async (
     amount:number,
    difficulty:Difficulty
    )=>{
const res = await axios.get(`https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`);
console.log(res.data.results);

return( res.data.results.map((question:Question)=>({
    ...question,
    answers:shuffleArray([
        ...question.incorrect_answers,
        question.correct_answer
    ])

})));

}



