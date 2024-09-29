import { Search, Sorting, TaskInput } from './components';
import styles from './control-panel.module.css';

export const ControlPanel = ({ onTodoAdd, onSearch, onSorting }) => {
	return (
		<div className={styles.controlPanel}>
			<div className={styles.panel}>
				<Search onSearch={onSearch} />
				<Sorting onSorting={onSorting} />
			</div>
			<div className={styles.panel}>
				<TaskInput onTodoAdd={onTodoAdd} />
			</div>
		</div>
	);
};
