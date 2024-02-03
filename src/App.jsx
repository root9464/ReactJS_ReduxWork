
import {Header} from './components/header/Header';
import {RecipeItem} from './components/recipe-item/RecipeItem';
function App() {
	console.log('App');
	return (
		<section>
			<Header />
			<div>
				<h1>Hello World</h1>
				<RecipeItem recipe={{id: 1, name: 'pizza'}} />
				<RecipeItem recipe={{id: 2, name: 'lasagna'}} />
				<RecipeItem recipe={{id: 3, name: 'sushi'}} />
			</div>
		</section>
	);
}

export default App;
