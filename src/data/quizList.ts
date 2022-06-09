export type IQuiz = {
    idx: number
    q: string
    a: AnswerType[]
    why?: string
}

export type AnswerType = {
    text: string
    isCorrect: boolean
}

const orgQuizzes : IQuiz[] = [
    {   
        idx: 0,
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
    },
    {
        idx: 1,
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
        idx: 2,
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
            },
            {
                text: "테크 스택: 원시 타입 데이터를 저장함",
                isCorrect: true
            }
        ],
        why: "'테크 스택'이라는 영역은 존재하지 않습니다."
    },
    {   
        idx: 3,
        q: "자바스크립트 예약어가 아닌 것은?",
        a: [
            {
                text: "await",
                isCorrect: false
            },
            {
                text: "that",
                isCorrect: true
            },
            {
                text: "while",
                isCorrect: false
            },
            {
                text: "case",
                isCorrect: false
            }
        ],
        why: "'this'는 예약어지만 'that'은 없습니다."
    },
]

export function shuffle(array: any[]) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

export default shuffle(orgQuizzes);