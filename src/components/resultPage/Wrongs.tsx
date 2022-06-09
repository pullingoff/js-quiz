import React from "react"
import styled from "styled-components"
import quizList, { AnswerType } from "../../data/quizList"

const Wrongs = ({wrongIdxList}: {
    wrongIdxList: number[]
}) => {

    const list = quizList.filter(elem => wrongIdxList.includes(elem.idx))
    
    return (
        <>
            <h2>틀린 문제 다시 보기</h2>
            {list?.map((quiz) => (
                <QuizContainer key={quiz.idx}>
                    <summary style={{fontSize: '1.1rem'}}>{quiz.q}</summary>
                    <span>정답: {quiz.a.filter((a : AnswerType)=>true===a.isCorrect)[0]?.text}</span> 
                </QuizContainer>
            ))}
        </>
    )
}

const QuizContainer = styled.details`
border: 1px solid grey;
cursor: pointer;
padding: 2px;
&:hover {
    background: #feffe2;
}
`

export default Wrongs;