import './ImageDetailsPage.css';

export function ImageDetailsPage({ artwork, backButtonHandler }) {
	return (
		<div className="image-details">
			<button className="back-button" type="button" onClick={backButtonHandler}>
				Back
			</button>
			<h2>{artwork.title}</h2>
			{artwork.artist_title !== null ? (
				<p>
					{artwork.artist_title}
					{', '}
					{artwork.date_display}
				</p>
			) : (
				<p>Unknown, {artwork.date_display}</p>
			)}
			<img
				alt={artwork.thumbnail.alt_text}
				src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
			/>
			<p>{artwork.thumbnail.alt_text}</p>
		</div>
	);
}
