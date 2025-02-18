import { useState } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

export interface Todo {
  text: string;
  id: string;
}

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { text: "Learn React in TypeScript", id: "123" },
  ]);

  return (
    <div>
      <h1>App</h1>
      <TodoForm
        onSubmit={(newTodo) => {
          setTodos((prev) => [newTodo, ...prev]);
          alert("추가되었습니다");
        }}
      />

      <ul>
        {todos.map((todo: Todo, index) => {
          return (
            <TodoItem
              key={todo.id}
              payload={todo}
              index={index}
              onDelete={() => {
                setTodos((prev) => prev.filter((item) => item.id !== todo.id));
                alert("삭제되었습니다.");
              }}
              onUpdate={(newTodo) => {
                setTodos((prev) =>
                  prev.map((item) => (item.id === newTodo.id ? newTodo : item))
                );
                alert("수정되었습니다.");
              }}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default App;

// //변수 선언 시 타입 주는 방법
// // 변수 오른편에 :쓰고 타입을 적는다
// //예시) const 변수:string = "asdsads"

// import { useState } from "react";

// const App = () => {
//   const [value, setValue] = useState<string>("");
//   // "0" => 숫자가이니라 숫자로 하는 연산이 불가

//   return (
//     <div>
//       <h1>App</h1>
//       <input
//         type="text"
//         value={value}
//         onChange={(e) => setValue(e.target.value)}
//       />

//     </div>
//   );
// };

// export default App;

// // props-drilling 값에 타입주는 방법
// // 오브젝트에서 바로 값을 꺼내오는 것을 de-structure
// // {} 오른편에 : {값들을 선택해서:타입을 지정}
// // 예시) { text }: { text: string }
// const Item = ({ text }: { text: string }) => {
//   return <p>{text}</p>;
// };
