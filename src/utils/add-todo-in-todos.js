import { NEW_TODO_ID } from '../constants';

export const addTodoInTodos = (todos, todo, todoTitle) => {
	const newTodo = todo || {
		id: NEW_TODO_ID,
		title: todoTitle,
		completed: false,
		isEditing: false,
	};

	return [newTodo, ...todos];
};
