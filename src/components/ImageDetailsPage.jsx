import './ImageDetailsPage.css';

export function ImageDetailsPage({ artwork, backButtonHandler }) {
	return (
		<div>
			<h2>
				{artwork.title}, {artwork.date_display}{' '}
			</h2>
			<img alt={artwork.thumbnail.alt_text} src="" />
			<button type="button" onClick={backButtonHandler}>
				Back
			</button>
		</div>
	);
}
