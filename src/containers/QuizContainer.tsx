import React, { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PinkButton } from "../components/PinkButton";
import { Quiz } from "../components/Quiz";
import { RootState } from "../modules";
import { goToFirst, next, reset, setName } from "../modules/result";
import { Introduction } from "../components/introPage/IntroPage";
import { Header, ResetBtn } from "../styles";
import Wrongs from "../components/resultPage/Wrongs";
import styled from "styled-components";

function QuizContainer() {
    // 상태 조회
  const page = useSelector((state : RootState) => state.result.page); // 여기서 result: modules 파일이름
  const dispatch = useDispatch();
  const quizzes = useSelector((state : RootState) => state.result.quizzes);
  const score = useSelector((state : RootState) => state.result.score);
  const wrongQuizList = useSelector((state: RootState) => state.result.wrongQuizIndexes);
  const realname = useSelector((state : RootState) => state.result.name);

  const [tempname, setTempname] = useState<string>('');

  const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTempname(e.target.value)
  }

  const goHome = () => {
    dispatch(reset())
  }

  const quizStart = () => {
    dispatch(next());
    dispatch(setName(tempname));
  }
  
  return (
    <>
      {page===0 && (
        <>
          <Header>😎 자스퀴즈 💻</Header>
          <Introduction cnt={quizzes.length} />
          <StyledInput type='text' 
                         placeholder='닉네임(선택)' 
                         value={tempname}
                         onChange={handleChange}
                         />
          <PinkButton text="퀴즈 시작!" clickEvent={quizStart} />
        </>
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
          <Header>
            {realname.length > 0 &&
              <span>{realname}님의 점수는 <br/></span>
            }
            {realname.length <= 0 &&
              <span>당신의 점수는 <br/></span>
            }
              100점 만점에&nbsp;
            <span style={{color:'red'}}>{score}</span>
            점입니다 😉
          </Header>
          <ResetBtn background="#fff0a6"
                    onClick={()=>dispatch(goToFirst())}>다시 도전하기 ⏰</ResetBtn>
          <ResetBtn background="#bcf4f0"
                    onClick={()=>dispatch(reset())}>첫 화면으로 가기 ⏰</ResetBtn>
          <Wrongs wrongIdxList={wrongQuizList} />
        </>
      )}
    </>
  );
}


const StyledInput = styled.input`
display: block;
padding: 5px;
border: 1px solid #fff0a6;
outline: none;
margin-bottom: 1rem;
font-size: 1.1rem;
margin: auto;
margin-bottom: 10px;
`

export default QuizContainer;
