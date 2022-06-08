export interface IQuiz {
    q: string
    a: IAnswer[]
    why?: string
}

export interface IAnswer {
    text: string
    isCorrect: boolean
}

const quizzes : IQuiz[] = [
    {
        q: "서버가 보낸 HTML, CSS로 DOM 트리, CSSOM 트리를 만드는 것은?",
        a: [
            {
                text: "브라우저 렌더링 엔진",
                isCorrect: true
            },
            {
                text: "자바스크립트 엔진",
                isCorrect: false
            },
        ],
        why: ""
    },
    {
        q: "자바스크립트 엔진에 포함되지 않는 것은?",
        a: [
            {
                text: "콜 스택",
                isCorrect: false
            },
            {
                text: "태스크 큐(이벤트 큐)",
                isCorrect: false
            },
            {
                text: "메모리 힙",
                isCorrect: false
            },
            {
                text: "HTML 파서",
                isCorrect: true
            }
        ],
        why: "HTML 파서는 브라우저 렌더링 엔진에 속합니다."
    },
    {
        q: "자바스크립트 엔진의 각 영역과 설명이 잘못 연결된 것은?",
        a: [
            {
                text: "콜 스택: 현재 실행중인 함수를 알려줌",
                isCorrect: false
            },
            {
                text: "태스크 큐(이벤트 큐): 처리할 메시지 목록과 실행할 콜백 함수들의 리스트",
                isCorrect: false
            },
            {
                text: "메모리 힙: 동적으로 만들어진 인스턴스가 메모리에 할당되는 곳",
                isCorrect: false
            }
        ]
    },
]

export default quizzes;