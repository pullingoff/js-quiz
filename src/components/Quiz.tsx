import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {BlueButton} from "./BlueButton"
import { RootState } from "../modules";
import {Progress} from "./Progress"
import {next, check} from "../modules/result"

export function Quiz() {
    const dispatch = useDispatch();
    const quiz = useSelector((state : RootState) => state.result.quizzes);
    const page = useSelector((state : RootState) => state.result.page);

    const onSubmit = (isCorrect: boolean) => {
        dispatch(check({isCorrect: isCorrect}));
        dispatch(next());
    }
    
    return (
        <>
            <h1 style={{margin: "50px 0"}}>
                {quiz[page-1].q}
            </h1>
            {quiz[page-1].a.map((item) => {
                let answer = item.text
                return (
                    <BlueButton 
                        key={answer}
                        text={answer} 
                        clickEvent={()=> {
                            onSubmit(item.isCorrect)
                        }}
                    />
                );
            })}
            <Progress page={page} maxPage={quiz.length}></Progress>
        </>
    )
}