import React from "react"
import styled from "styled-components"
import quizList, { AnswerType } from "../../data/quizList"

const Wrongs = ({wrongIdxList}: {
    wrongIdxList: number[]
}) => {

    const list = quizList.filter(elem => wrongIdxList.includes(elem.idx))
    
    return (
        <>
            {wrongIdxList.length > 0 &&
                <BigP>📝 틀린 문제 다시 보기 📝</BigP>
            }
            {wrongIdxList.length ==0 &&
                <BigP>야생의 '<i>자바스크립트 고수</i>'가 나타났습니다 🥇</BigP>    
            }
            {list?.map((quiz) => (
                <QuizContainer key={quiz.idx}>
                    <summary style={{fontSize: '1.1rem'}}>{quiz.q}</summary>
                    <span>정답: {quiz.a.filter((a : AnswerType)=>true===a.isCorrect)[0]?.text}</span> 
                </QuizContainer>
            ))}
        </>
    )
}

const BigP = styled.p`
font-size: 1.3rem;
`

const QuizContainer = styled.details`
border: 0.5px solid grey;
cursor: pointer;
padding: 0.5rem;
&:hover {
    background: #feffe2;
}
`

export default Wrongs;