
import {FaHandHoldingHeart} from 'react-icons/fa6';
import styles from './header.module.css';
import {useFavorites} from '../../hooks/useFavorites';
export const Header = () => {
	const {favorites} = useFavorites();

	return (
		<header className={styles.header}>
			<FaHandHoldingHeart size={20} />
			<span>{favorites.length}</span>
		</header>
	);
};

