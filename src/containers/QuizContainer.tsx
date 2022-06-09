import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { PinkButton } from "../components/PinkButton";
import { Quiz } from "../components/Quiz";
import { RootState } from "../modules";
import { goToFirst, next, reset } from "../modules/result";
import { Introduction } from "../components/introPage/IntroPage";
import { Header, ResetBtn } from "../styles";
import Wrongs from "../components/resultPage/Wrongs";

function QuizContainer() {
    // 상태 조회
  const page = useSelector((state : RootState) => state.result.page); // 여기서 result: modules 파일이름
  const dispatch = useDispatch();
  const quizzes = useSelector((state : RootState) => state.result.quizzes);
  const score = useSelector((state : RootState) => state.result.score);
  const wrongQuizList = useSelector((state: RootState) => state.result.wrongQuizIndexes);

  const goHome = () => {
    dispatch(reset())
  }
  return (
    <>
      {page===0 && (
        <>
        <Header>😎 자스퀴즈 💻</Header>
        <Introduction cnt={quizzes.length} />
        <PinkButton text="퀴즈 시작!" clickEvent={()=>dispatch(next())} />
        </>
        // <IntroPage
        //   goToNextEvent={ dispatch(next())}  
        //   quizLen={quizzes.length}
        // />
      )}
      {page > 0 && page <= quizzes.length && (
        <>
          <ResetBtn onClick={goHome}>처음으로 돌아가기 ⏰</ResetBtn>
          <Quiz/>
        </>
      )}
      {page > quizzes.length && (
        <>
          <Header>끝!</Header>
          <Header>당신의 점수는 <br/>
              100점 만점에&nbsp;
            <span style={{color:'red'}}>{score}</span>
            점입니다 😉
          </Header>
          <ResetBtn onClick={()=>dispatch(goToFirst())}>다시 도전하기 ⏰</ResetBtn>
          <ResetBtn onClick={()=>dispatch(reset())}>첫 화면으로 가기 ⏰</ResetBtn>
          <Wrongs wrongIdxList={wrongQuizList} />
        </>
      )}
    </>
  );
}

export default QuizContainer;
