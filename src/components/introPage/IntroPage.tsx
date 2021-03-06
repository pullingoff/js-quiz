import React from "react"
import { Header } from "../../styles"
import { PinkButton } from "../PinkButton"

const IntroPage = ({...props}: {
    goToNextEvent: any
    quizLen: number
}) => {
    return (
        <>
          <Header>π μμ€ν΄μ¦ π»</Header>
          <Introduction cnt={props.quizLen} />
          <PinkButton text="ν΄μ¦ μμ!" clickEvent={props.goToNextEvent} />
        </>
    )
}


export const Introduction = ({cnt}: {
    cnt: number
  }) => {
    return (
      <>
        <p style={{fontSize:'1.3rem', lineHeight:'2rem'}}>
          λΉμ μ μλ°μ€ν¬λ¦½νΈ μ§μμ νμΈν΄λ³΄μΈμ! <br/>
          λ©΄μ μ μ€λΉνκ³  μλ€λ©΄, λ°λ³΅ν΄μ νμ΄λ³΄λ κ²λ μ’μ λ°©λ²μ΄μμ.<br/>
        </p>
        <h2>
          μ΄ {cnt}λ¬Έμ 
        </h2>
      </>
    )
  }

export default IntroPage;