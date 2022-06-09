import React from "react"
import { Header } from "../../styles"
import { PinkButton } from "../PinkButton"

const IntroPage = ({...props}: {
    goToNextEvent: any
    quizLen: number
}) => {
    return (
        <>
          <Header>😎 자스퀴즈 💻</Header>
          <Introduction cnt={props.quizLen} />
          <PinkButton text="퀴즈 시작!" clickEvent={props.goToNextEvent} />
        </>
    )
}


export const Introduction = ({cnt}: {
    cnt: number
  }) => {
    return (
      <>
        <p style={{fontSize:'1.3rem', lineHeight:'2rem'}}>
          당신의 자바스크립트 지식을 확인해보세요! <br/>
          면접을 준비하고 있다면, 반복해서 풀어보는 것도 좋은 방법이에요.<br/>
        </p>
        <h2>
          총 {cnt}문제
        </h2>
      </>
    )
  }

export default IntroPage;