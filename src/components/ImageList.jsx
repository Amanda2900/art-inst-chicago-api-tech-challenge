import './ImageList.css';

export function ImageList({ data, clickHandler }) {
	return (
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
	);
}
