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
                <h3>📝 틀린 문제 다시 보기 📝</h3>
            }
            {wrongIdxList.length ==0 &&
                <p style={{fontSize: '1.3rem'}}>야생의 '<i>자바스크립트 고수</i>'가 나타났습니다 🥇</p>    
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

const QuizContainer = styled.details`
border: 0.5px solid grey;
cursor: pointer;
padding: 2px;
&:hover {
    background: #feffe2;
}
`

export default Wrongs;