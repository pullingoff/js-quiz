import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { PinkButton } from "../components/PinkButton";
import { Quiz } from "../components/Quiz";
import { RootState } from "../modules";
import { next, reset } from "../modules/result";

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
        <Main>
          <h1 style={{fontSize:'3rem'}}>😎 자바스크립트 퀴즈 💻</h1>
          <Introduction cnt={quizzes.length} />
          <PinkButton text="퀴즈 시작!" clickEvent={() => {
            dispatch(next())
          }} />
        </Main>
      )}
      {page > 0 && page <= quizzes.length && (
        <Main>
          <button onClick={goHome}>홈으로</button>
          <Quiz/>
        </Main>
      )}
      {page > quizzes.length && (
        <Main>
          우와 끝! 당신의 점수는?

          {score}
        </Main>
      )}
    </>
  );
}

const Introduction = ({cnt}: {
  cnt: number
}) => {
  return (
    <>
      <p style={{fontSize:'1.3rem'}}>
        당신의 자바스크립트 지식을 확인해보세요! <br/>
        면접을 준비하고 있다면, 자주 들어와서 반복해서 풀어보는 것도 좋은 방법이에요.<br/>
      </p>
      <h2>
        총 {cnt}문제
      </h2>
    </>
  )
}

const Main = styled.main`
text-align: center;
`

export default QuizContainer;
