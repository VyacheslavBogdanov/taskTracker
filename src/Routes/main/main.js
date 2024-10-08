import { ControlPanel } from '../../components';
import { useState, useEffect } from 'react';
import { readTodos, updateTodo, createTodo } from '../../api';
import { setTodoInTodos, removeTodoInTodos, addTodoInTodos } from '../../utils';
import { Search, Sorting, TaskInput } from './components';
// import { Button } from '../../components';
import { Link } from 'react-router-dom';
import styles from './main.module.css';
import { NEW_TODO_ID } from '../../constants';

export const Main = () => {
	const [todos, setTodos] = useState([]);
	const [searchPhrase, setSearchPhrase] = useState('');
	const [isAlphabetSorting, setIsAlphabetSorting] = useState(false);

	const onTodoCompletedChange = (id, newCompleted) => {
		updateTodo({ id, completed: newCompleted }).then(() => {
			setTodos(setTodoInTodos(todos, { id, completed: newCompleted }));
		});
	};

	const onTodoAdd = (title, completed) => {
		if (title) {
			createTodo({ title, completed }).then((todo) => {
				let createdTodos = setTodoInTodos(todos, {
					id: NEW_TODO_ID,
					isEditing: true,
				});
				createdTodos = removeTodoInTodos(createdTodos, NEW_TODO_ID);
				createdTodos = addTodoInTodos(createdTodos, todo);
				setTodos(createdTodos);
			});
		}
	};

	useEffect(() => {
		readTodos(searchPhrase, isAlphabetSorting).then((loadedTodos) =>
			setTodos(loadedTodos),
		);
	}, [searchPhrase, isAlphabetSorting]);

	return (
		<>
			<ControlPanel>
				<div className={styles.panel}>
					<Search onSearch={setSearchPhrase} />
					<Sorting onSorting={setIsAlphabetSorting} />
				</div>
				<div className={styles.panel}>
					<TaskInput onTodoAdd={onTodoAdd} />
				</div>
			</ControlPanel>
			<div>
				{todos.map(({ id, title, completed }) => (
					<div className={styles.todo} key={id}>
						<input
							className={styles.checkbox}
							type="checkbox"
							checked={completed}
							onChange={({ target }) =>
								onTodoCompletedChange(id, target.checked)
							}
						/>
						<Link to={`/todo/${id}`} className={styles.title}>
							{title}
						</Link>
					</div>
				))}
			</div>
		</>
	);
};
