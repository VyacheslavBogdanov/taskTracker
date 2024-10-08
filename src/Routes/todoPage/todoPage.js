import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, ControlPanel } from '../../components';
import { readTodo, deleteTodo, updateTodo } from '../../api';
import styles from './todoPage.module.css';

export const TodoPage = () => {
	const [title, setTitle] = useState('');
	const { id } = useParams();
	const navigate = useNavigate();

	const onRemove = () => deleteTodo(id).then(() => navigate('/'));

	const onSave = () => {
		updateTodo({ id, title }).then(() => navigate('/'));
	};

	useEffect(() => {
		if (id === undefined) return;

		readTodo(id).then((loadedTodo) => {
			if (loadedTodo.title === undefined) {
				navigate('/404');
			}

			setTitle(loadedTodo.title);
		});
	}, [id, navigate]);

	return (
		<>
			<ControlPanel>
				<Button className={styles.button}>
					<Link to="/">←</Link>
				</Button>
				<Button onClick={onRemove}>✘</Button>
				<Button onClick={onSave}>✔</Button>
			</ControlPanel>
			<div>
				<textarea
					className={styles.title}
					value={title}
					onChange={({ target }) => setTitle(target.value)}
				/>
			</div>
		</>
	);
};
