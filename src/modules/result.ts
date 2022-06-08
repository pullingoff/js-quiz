// 상태: 사용자가 응답한 목록, [값, 값, 값]
import quizzes, { IQuiz } from "../data/quizList"

// 액션 타입 
// as const 해줘야 액션 타입 추론할때 string 아니고 뫄뫄/뫄뫄 로 됨
const CHECK_CORRECT = "test/CHECK_CORRECT" as const;
const NEXT_PAGE = "test/NEXT_PAGE" as const;
const RESET = "test/RESET" as const;

// 액션 생성 함수들
export function check({isCorrect} : {
    isCorrect : boolean
}) {
    return {
        type: CHECK_CORRECT,
        // 액션에 필요한 값을 페이로드라고 함.
        payload: {isCorrect}
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

type ResultAction =
| ReturnType<typeof check>
| ReturnType<typeof next>
| ReturnType<typeof reset>;

type ResultState = {
    score: number,
    quizzes: IQuiz[],
    answers: [],
    page: number
}

const initialState : ResultState = {
    score: 0,
    quizzes: quizzes,
    answers: [],
    page: 0 // 0: intro, 1~quizzes.length :퀴즈, quizzes.length +1: 마지막
}

// reducer
export default function result(
        state : ResultState = initialState,
        action : ResultAction
    ) {
    switch (action.type) {
        case CHECK_CORRECT:  // 답변을 했으면 기존에 있던 answers+새 answer를 합친 배열을 다시 state에 저장
            return {
                ...state,
                score: action.payload.isCorrect 
                ? state.score + 10  // 맞추면 10점 획득
                : state.score,
                // answers: [...state.answers, action.payload.answer]
            }
        case NEXT_PAGE:
            return {
                ...state,
                page: state.page +1
            };
        case RESET:
            return {
                ...state,
                score: 0,
                page: 0
            }
        default:
            return state;
    }
}