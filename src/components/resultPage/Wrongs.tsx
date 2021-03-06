import React from "react"
import styled from "styled-components"
import quizList, { AnswerType } from "../../data/quizList"

const Wrongs = ({wrongIdxList}: {
    wrongIdxList: number[]
}) => {

    const list = quizList.filter(elem => wrongIdxList.includes(elem.idx))
    
    const getAnswer = (answerList: AnswerType[]) => {
        return answerList.filter((a : AnswerType)=>true===a.isCorrect)[0]?.text
    }

    return (
        <>
            {wrongIdxList.length > 0 &&
                <BigP>π νλ¦° λ¬Έμ  λ€μ λ³΄κΈ° π</BigP>
            }
            {wrongIdxList.length ==0 &&
                <BigP>μΌμμ '<i>μλ°μ€ν¬λ¦½νΈ κ³ μ</i>'κ° λνλ¬μ΅λλ€ π₯</BigP>    
            }
            {list?.map((quiz) => (
                <QuizContainer key={quiz.idx}>
                    <summary style={{fontSize: '1.1rem'}}>{quiz.q}</summary>
                    <StyledSpan>μ λ΅: {getAnswer(quiz.a)}</StyledSpan> 
                    {quiz.why && <StyledSpan>μ΄μ : {quiz.why}</StyledSpan>}
                </QuizContainer>
            ))}
        </>
    )
}

const StyledSpan = styled.span`
display: block;
margin-top: 0.5rem;
`;

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