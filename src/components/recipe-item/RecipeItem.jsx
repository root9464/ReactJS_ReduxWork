/* eslint-disable react/prop-types */

import styles from './RecipeItem.module.css';
import {useActions} from '../../hooks/useActions';
import {useFavorites} from '../../hooks/useFavorites';
export const RecipeItem = ({recipe}) => {
	const {favorites} = useFavorites();
	console.log(favorites);
	const {toggleToFavites} = useActions();

	return (
		<div className={styles.item}>
			<h3>{recipe.name}</h3>
			<button onClick={() => (toggleToFavites(recipe))}>
				{favorites.some(r => r.id === recipe.id) ? 'Remove from favorites' : 'Add to favorites'}
			</button>
		</div>
	);
};
