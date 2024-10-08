import { Routes, Route } from 'react-router-dom';
import { Main, TodoPage, ErrorPage } from './Routes';

import styles from './app.module.css';

export const App = () => {
	return (
		<div className={styles.app}>
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/todo" element={<TodoPage />} />
				<Route path="/todo/:id" element={<TodoPage />} />
				<Route path="/404" element={<ErrorPage />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</div>
	);
};
