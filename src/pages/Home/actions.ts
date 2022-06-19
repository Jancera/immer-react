import { ITodo } from ".";

export enum ActionTypes {
  ADD,
  TOGGLE,
}

export interface IAction {
  type: ActionTypes;
  payload: any;
}

export const addTodoAction = (data: ITodo) => {
  return { type: ActionTypes.ADD, payload: data };
};

export const toggleTodoAction = (id: string) => {
  return { type: ActionTypes.TOGGLE, payload: id };
};
