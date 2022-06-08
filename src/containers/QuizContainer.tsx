import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { PinkButton } from "../components/PinkButton";
import { Quiz } from "../components/Quiz";
import { RootState } from "../modules";
import { next } from "../modules/result";

function QuizContainer() {
    // 상태 조회
  const page = useSelector((state : RootState) => state.result.page); // 여기서 result: modules 파일이름
  const dispatch = useDispatch();
  const quiz = useSelector((state : RootState) => state.result.quizzes);
  const score = useSelector((state : RootState) => state.result.score);
  
  return (
    <>
      {page===0 && (
        <main>
          
          <h1>자바스크립트 퀴즈</h1>
          <PinkButton text="퀴즈 시작!" clickEvent={() => {
            dispatch(next())
          }} />
        </main>
      )}
      {page > 0 && page <= quiz.length && (
        <Quiz></Quiz>
      )}
      {page > quiz.length && (
        <main>
          우와 끝! 당신의 점수는?

          {score}
        </main>
      )}
    </>
  );
}

export default QuizContainer;
