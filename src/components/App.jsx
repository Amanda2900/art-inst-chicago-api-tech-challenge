import './App.css';

import { searchArtworks } from '../utils/api';
import { SearchForm } from './SearchForm';
import { ImageDetailsPage } from './ImageDetailsPage';
import { Footer } from './Footer';
import { useState } from 'react';

export function App() {
	const [data, setData] = useState([]);
	const [artworkSelected, setArtworkSelected] = useState(false);
	const [artwork, setArtwork] = useState();

	function onSearchSubmit(query) {
		// Search for the users's query.
		// TODO: render the results, instead of logging them to the console.
		// NOTE: `searchArtworks` currently returns local data, so that we
		// don't make too many requests to the API! Once we've built out
		// our UI, we need to make real requests!
		// @see: ./src/uitls/api.js
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
					<ul>
						{data.map((item) => {
							return (
								<li key={item.id}>
									<button
										className="button-link"
										type="button"
										onClick={() => clickHandler(item)}
									>
										<span>{item.title}</span>
									</button>{' '}
									{item.artist_title}
								</li>
							);
						})}
					</ul>
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
