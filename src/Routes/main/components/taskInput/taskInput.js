import styles from './taskInput.module.css';
import { useState } from 'react';
import { Button } from '../../../../components';

export const TaskInput = ({ onTodoAdd }) => {
	const [value, setValue] = useState('');

	const onChange = ({ target }) => {
		setValue(target.value);
	};

	const onSubmit = (event) => {
		event.preventDefault();
		onTodoAdd(value, false);
		setValue('');
	};

	return (
		<form className={styles.task} onSubmit={onSubmit}>
			<input
				className={styles.input}
				type="text"
				value={value}
				placeholder="Введите задачу..."
				onChange={onChange}
			/>
			<Button type="submit">✚</Button>
		</form>
	);
};
