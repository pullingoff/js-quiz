import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { PinkButton } from "../components/PinkButton";
import { Quiz } from "../components/Quiz";
import { RootState } from "../modules";
import { goToFirst, next, reset } from "../modules/result";

function QuizContainer() {
    // 상태 조회
  const page = useSelector((state : RootState) => state.result.page); // 여기서 result: modules 파일이름
  const dispatch = useDispatch();
  const quizzes = useSelector((state : RootState) => state.result.quizzes);
  const score = useSelector((state : RootState) => state.result.score);
  
  const goHome = () => {
    dispatch(reset())
  }
  return (
    <>
      {page===0 && (
        <>
          <Header>😎 자스퀴즈 💻</Header>
          <Introduction cnt={quizzes.length} />
          <PinkButton text="퀴즈 시작!" clickEvent={() => {
            dispatch(next())
          }} />
          </>
        // </Main>
      )}
      {page > 0 && page <= quizzes.length && (
        // <Main>
        <>
          <ResetBtn onClick={goHome}>처음으로 돌아가기 ⏰</ResetBtn>
          <Quiz/>
        </>
        // </Main>
      )}
      {page > quizzes.length && (
        // <Main>
        <>
          <Header>끝!</Header>
          <Header>당신의 점수는 <br/>
              100점 만점에&nbsp;
            <span style={{color:'red'}}>{score}</span>
            점입니다 😉
          </Header>
          <ResetBtn onClick={()=> {
            dispatch(goToFirst())
          }}>다시 도전하기 ⏰</ResetBtn>
          <ResetBtn onClick={()=> {
            dispatch(reset())
          }}>첫 화면으로 가기 ⏰</ResetBtn>
        
        </>
      )}
    </>
  );
}

const Introduction = ({cnt}: {
  cnt: number
}) => {
  return (
    <>
      <p style={{fontSize:'1.3rem', lineHeight:'2rem'}}>
        당신의 자바스크립트 지식을 확인해보세요! <br/>
        면접을 준비하고 있다면, 자주 들어와서 반복해서 풀어보는 것도 좋은 방법이에요.<br/>
      </p>
      <h2>
        총 {cnt}문제
      </h2>
    </>
  )
}

const Header = styled.h1`
font-size: 3rem;
`

const ResetBtn = styled.button`
border: 1px solid lightgrey;
margin: auto;
font-size: 1.3rem;
background: transparent;
font-weight: bold;
cursor: pointer;
&:hover {
  background: lightgrey;
}
`


export default QuizContainer;
