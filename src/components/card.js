import React from 'react';

const Card = ({ title, subtitle, link, image, tags }) => (
	<a className="project-card" href={link} title={title}>
		<div className="card">
			<div className="card-content">
				<div className="media">
					<div className="media-left">
						<figure className="image is-128x128">
							<img src={image} alt={title} />
						</figure>
					</div>

					<div className="media-content">
						<p className="title is-size-5">{title}</p>
						<p className="subtitle is-size-6">{subtitle}</p>

						<div className="tags">
							{
								tags.map(tag => (
									<span className="tag" key={tag}>{tag}</span>
								))
							}
						</div>
					</div>
				</div>
			</div>
		</div>
	</a>
);

export default Card;