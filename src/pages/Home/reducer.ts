import { Reducer } from "use-immer";

import { ITodo } from ".";
import { ActionTypes, IAction } from "./actions";

export const reducer: Reducer<ITodo[], IAction> = (draft, action) => {
  switch (action.type) {
    case ActionTypes.ADD: {
      draft.push(action.payload);
      break;
    }
    case ActionTypes.TOGGLE: {
      const todo = draft.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.done = !todo.done;
      }
      break;
    }
    default:
      break;
  }
};

/* export const reducer: Reducer<ITodo[], IAction> = (state, action) => {
  switch (action.type) {
    case ActionTypes.ADD: {
      return [...state, action.payload];
    }
    case ActionTypes.TOGGLE: {
      const data = [...state];
      return data.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, done: !todo.done };
        }
        return todo;
      });
    }
    default:
      return state;
  }
}; */
