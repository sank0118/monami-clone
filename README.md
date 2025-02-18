# Typescript

코드의 안정성을 더해주고 자동완성 기능을 통해 내가 전달해야 하거나 받아야하는 값들의 타입을 통일 시킬 수 있음.
let => 유동 동적이라고 표현
const => 항상 같은 정적이라고 표현

Javascript 동적인 프로그램 언어
Typescript 정적인 프로그램 언어

## 타입 지정하는 방법

변수 오른편에 ":" 쓰고 타입 적어주면 됨
예) const a: string = "a"

함수 인자값마다 타입 지정가능
예) const fn = (v1:string, v2: number)=>{}

함수 return 값은 인자값이 끝나는 "()" 뒤에 ":"을 쓰고 타입 지정
예) const fn = ():string => "random Text"

### 타입을 변수처럼 저장해서 쓰는 방법

type/interface 선언법을 쓰면 됨
type 선언법은 직렬구조
type 타입명 = 타입지정
예) Type A = string

interface 선언법은 객체처럼 여러 값을 가지는 타입을 지정할 수 있음
interface 타입명{
값: 타입
값2: 타입
...
}

예) interface A {
text: string
index: number
...
}

#### 함수에도 타입지정 가능

반환하는 return 값이 없다면 void,
반환하는 return 값이 있다면 타입을 지정할 수 있음

type fn1 = () => void
type fn2 = () => 타입

예) const fn1 : Fn1 = () => console,log("Test")
예) const fn2 : Fn2 = () => "Test"

# React에서 훅 타입 쓰는 법

<>을 제네릭이라고 하며 타입을 전달해주는 역할이다.

1. useState<초기값의 타입>[초기값]

- 예) const[text, setText] = useState<string>("")
- 빈 문자열은 타입 지정 안해줘도 알아서 문자열 타입으로 인지
- 숫자 0은 타입 지정 안해줘도 알아서 숫자 타입으로 인지
- true/false은 타입 지정 안해줘도 알아서 boolean 타입으로 인지

2. useRef<null | HTML타입요소>(null)

- |는 또는이라는 뜻이다. HTML요소를 잡아서 정해주면 된다.
