const s1: string = "a";
const s2: string = "b";
const s3: string = "c";
const s4: string = "d";
const s5: string = "e";

const n1: number = 1;
const n2: number = 2;
const n3: number = 3;
const n4: number = 4;
const n5: number = 5;

const b1: boolean = false;
const b2: boolean = true;
const b3: boolean = false;
const b4: boolean = true;
const b5: boolean = true;

// 강력한 타입주는 법
// 변수나 props-drilling의 값 오른편에 :을 쓰고 타입을 줄때 직접 값을 지정하면 된다.

// Super App, Start App, Fun App
// 여러 타입 지정하고 싶을 경우 | 기호로 구분하여 추가한다

//많은 타입을 변수처럼 지정해서 사용 가능함
// type interface
// type 사용법 type을 쓰고 오른편에 타입의 이름을 정해주면 됨
// ts 작명법은 무조건 대문자로 시작, 캐멀케이스 따라감

export const AppTitle: "Super App" | "Start App" | "Fun App";
// 심지어 내보내기도 가능함

interface Person {
  name: string;
  age: number;
}

const appTitle: AppTitle = "Super App";

// 함수에서 타입 지정하기
// 인자값, return값을 지정할 수 있다.

// ()와 => 사이에 :을 쓰고 타입을 정하면 함수의 return값의 타입을 정할 수 있음
// ()안의 각각의 인자값에도 :을 써서 타입을 지정할 수 있다
const fn = (n1: number, n2: number) => {
  console.log(n1 * n2);
  return `${n1} * ${n2}`;
};

fn(1234, 12);

// 함수 자체도 타입으로 만들 수 있음
// ()=> return 하는 값이 있으면 타입을 적는다
//  return 하는 값이 없을 때는 void 적어주면 됨

type Fn1 = () => void;
type Fn2 = () => string;

const fn1: Fn1 = () => console.log("test");
const fn2 = (): string => "random text";

interface ComponentProps {
  fn1: Fn1;
  fn2: Fn2;
}

const Component = ({ fn1, fn2 }: ComponentProps) => {
  return;
};
