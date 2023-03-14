import './App.css';

import { searchArtworks } from '../utils/api';
import { SearchForm } from './SearchForm';
import { ImageList } from './ImageList';
import { ImageDetailsPage } from './ImageDetailsPage';
import { Footer } from './Footer';
import { useState } from 'react';

export function App() {
	const [data, setData] = useState([]);
	const [artworkSelected, setArtworkSelected] = useState(false);
	const [artwork, setArtwork] = useState();

	function onSearchSubmit(query) {
		// Search for the users's query.
		searchArtworks(query).then((json) => {
			setData(json.data);
		});
	}

	const clickHandler = (item) => {
		setArtwork(item);
		setArtworkSelected(true);
	};

	const backButtonHandler = () => {
		setArtworkSelected(false);
	};

	return (
		<div className="App">
			<h1>TCL Career Lab Art Finder</h1>
			{!artworkSelected ? (
				<div>
					<SearchForm onSearchSubmit={onSearchSubmit} />
					<ImageList clickHandler={clickHandler} data={data} />
				</div>
			) : (
				<ImageDetailsPage
					artwork={artwork}
					backButtonHandler={backButtonHandler}
				/>
			)}
			<Footer />
		</div>
	);
}
