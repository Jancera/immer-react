/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useReducer } from "react";

import Todo from "../../components/Todo";
import { addTodoAction, toggleTodoAction } from "./actions";
import { reducer } from "./reducer";

export interface ITodo {
  id: string;
  title: string;
  done: boolean;
}

const initialState = [
  {
    id: "React",
    title: "Learn React",
    done: true,
  },
  {
    id: "Immer",
    title: "Try Immer",
    done: false,
  },
];

const Home = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const unfinishedTodoCount = state.filter(
    (todo) => todo.done === false,
  ).length;

  const handleToggle = useCallback((id: string) => {
    dispatch(toggleTodoAction(id));
  }, []);

  const handleAdd = useCallback(
    () =>
      dispatch(
        addTodoAction({
          id: "todo_" + Math.random(),
          title: "A new todo",
          done: false,
        }),
      ),
    [],
  );

  return (
    <div className="container">
      <button onClick={handleAdd}>Add Todo</button>
      <ul>
        {state.map((todo) => (
          <Todo todo={todo} key={todo.id} onToggle={handleToggle} />
        ))}
      </ul>
      Tasks left: {unfinishedTodoCount}
    </div>
  );
};

export default Home;
