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

    const clickHandler = (isCorrect: boolean, idx: number) => {
        dispatch(check({isCorrect: isCorrect, qIdx: idx}));
        dispatch(next());
    }
    
    const quiz = quizList[page-1]
    const answers = shuffle(quiz.a) as AnswerType[]
    return (
        <Container>
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
                        clickHandler(ans.isCorrect, quiz.idx)
                    }}
                    />
                    );
                })}
                <Progress page={page} maxPage={quizList.length} />
            
        </Container>
    )
}

const Container = styled.section`
margin: 2rem 0;
`

const Question = styled.h1`
margin: 2rem;

`
