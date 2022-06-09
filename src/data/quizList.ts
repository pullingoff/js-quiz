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
    {   
        idx: 4,
        q: "자바스크립트에서 이벤트 버블링을 막는 이벤트 API는?",
        a: [
            {
                text: "event.stopBubbling()",
                isCorrect: false
            },
            {
                text: "event.stopPropagation()",
                isCorrect: true
            },
        ]
    },
    {   
        idx: 5,
        q: "한 DOM 요소에 이벤트가 발생했을 경우, 이벤트가 최상단의 부모 요소에서부터 전달되어 내려오는 현상은?",
        a: [
            {
                text: "이벤트 캡쳐링",
                isCorrect: true
            },
            {
                text: "이벤트 디폴트",
                isCorrect: false
            },
            {
                text: "이벤트 되물림",
                isCorrect: false
            },
        ]
    },
    {   
        idx: 6,
        q: "console.log('문자열'/2); 의 결과는?",
        a: [
            {
                text: "NaN",
                isCorrect: true
            },
            {
                text: "null",
                isCorrect: false
            },
            {
                text: "false",
                isCorrect: false
            },
        ]
    },
    {   
        idx: 7,
        q: "'자신이 선언됐을 때의 렉시컬 환경을 기억하는 함수'는 무엇의 설명일까요?",
        a: [
            {
                text: "클로저",
                isCorrect: true
            },
            {
                text: "바인드",
                isCorrect: false
            },
            {
                text: "컨텍스트",
                isCorrect: false
            },
        ]
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