// 상태: 사용자가 응답한 목록, [값, 값, 값]
import quizzes, { AnswerType, IQuiz } from "../data/quizList"

// 액션 타입 
// as const 해줘야 액션 타입 추론할때 string 아니고 뫄뫄/뫄뫄 로 됨
const CHECK_CORRECT = "result/CHECK_CORRECT" as const;
const NEXT_PAGE = "result/NEXT_PAGE" as const;
const RESET = "result/RESET" as const;
const GO_TO_FIRST = "result/GO_TO_FIRST" as const;
const SET_NAME = "result/SET_NAME" as const;

type CheckType = {
    isCorrect: boolean
    qIdx: number
    name?: string
}
// 액션 생성 함수들
export function check(props : CheckType) {
    return {
        type: CHECK_CORRECT,
        payload: {
            isCorrect : props.isCorrect,
            quizIdx : props.qIdx,
            // ...props
        }, // 액션에 필요한 값
    }
}

export function next() {
    return {
        type: NEXT_PAGE,
    }
}

export function reset() {
    return {
        type: RESET,
    }
}

export function goToFirst() {
    return {
        type: GO_TO_FIRST,
    }
}

export function setName(name: string) {
    return {
        type: SET_NAME,
        payload: {
            name: name,
        }
    }
}

type ResultAction =
| ReturnType<typeof check>
| ReturnType<typeof next>
| ReturnType<typeof reset>
| ReturnType<typeof goToFirst>
| ReturnType<typeof setName>;

type ResultState = {
    score: number,
    quizzes: IQuiz[],
    wrongQuizIndexes: number[],
    page: number,
    name: string
}

const initialState : ResultState = {
    score: 0,
    quizzes: quizzes,
    wrongQuizIndexes: [],
    page: 0,
    name: ''
    // 0: intro, 1~quizzes.length :퀴즈, quizzes.length +1: 마지막
}

// reducer
export default function result(
        state : ResultState = initialState,
        action : ResultAction
    ) {
    const pageCnt = quizzes.length
    switch (action.type) {
        case CHECK_CORRECT:  
        // 답변을 했으면 기존에 있던 answers+새 answer를 합친 배열을 다시 state에 저장
            return {
                ...state,
                score: action.payload.isCorrect 
                ? state.score + Math.round(100/pageCnt) // 맞추면 10점 획득
                : state.score,
                wrongQuizIndexes: action.payload.isCorrect
                ? [...state.wrongQuizIndexes]
                : [...state.wrongQuizIndexes, action.payload.quizIdx]
            }
        case NEXT_PAGE:
            return {
                ...state,
                page: state.page +1
            };
        case RESET:
            // 변수 모두 리셋
            return {
                ...state,
                score: 0,
                page: 0,
                wrongQuizIndexes: [],
                name: ''
            }
        case GO_TO_FIRST:
            return {
                ...state,
                score: 0,
                page: 1
            }
        case SET_NAME:
            return {
                ...state,
                name: action.payload.name
            }
        default:
            return state;
    }
}