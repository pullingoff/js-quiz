import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {BlueButton} from "./BlueButton"
import { RootState } from "../modules";
import {Progress} from "./Progress"
import {next, check} from "../modules/result"
import styled from "styled-components";
import { IQuiz, shuffle } from "../data/quizList";
import { AnswerType } from "../data/quizList";

export function Quiz() {
    const dispatch = useDispatch();
    const quizList = useSelector((state : RootState) => state.result.quizzes);
    const page = useSelector((state : RootState) => state.result.page);

    const onSubmit = (isCorrect: boolean) => {
        dispatch(check({isCorrect: isCorrect}));
        dispatch(next());
    }
    const quiz = quizList[page-1]
    const answers = shuffle(quiz.a) as AnswerType[]
    return (
        <>
            <Question>
                {quiz.q}
            </Question>
            {answers.map((ans, idx) => {
                let answer = ans.text
                return (
                    <BlueButton 
                        key={idx}
                        text={answer} 
                        clickEvent={()=> {
                            onSubmit(ans.isCorrect)
                        }}
                    />
                );
            })}
            <Progress page={page} maxPage={quizList.length}></Progress>
        </>
    )
}

const Question = styled.h1`
margin: 2rem;

`
