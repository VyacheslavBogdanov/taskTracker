import { Link } from 'react-router-dom';
import { Button, ControlPanel } from '../../components';
import styles from './errorPage.module.css';

export const ErrorPage = () => (
	<>
		<ControlPanel>
			<Button>
				<Link to="/">←</Link>
			</Button>
		</ControlPanel>
		<div className={styles.error}>Страница не найдена</div>
	</>
);
