import React from 'react';
import Layout from '../components/layout';
import projectImage from '../assets/douglas-lopes-front-end-developer.jpg';

const SecondPage = () => (
	<Layout>
		<section className="hero is-dark is-medium is-bold is-size-6">
			<div className="hero-body">
				<div className="container has-text-centered">
					<h1 className="title">Projetos</h1>
					<p className="content">Alguns dos meus projetos de destaque. Veja mais no meu <a href="https://github.com/DouglasAmarelo" target="_blank" rel="noopener noreferrer">Github</a></p>
				</div>
			</div>
		</section>

		<section className="section">
			<div className="container">

				<div className="columns is-centered">
					<div className="column is-half">
						<div className="card">
							<div className="card-content">
								<div className="media">
									<div className="media-left">
										<figure className="image is-96x96">
											<img src={projectImage} alt=""/>
										</figure>
									</div>

									<div className="media-content">
										<p className="title is-size-5">Project 01</p>
										<p className="subtitle is-size-6">Lorem ipsum dolor</p>

										<div className="tags">
											<span className="tag">HTML</span>
											<span className="tag">CSS</span>
											<span className="tag">javaScript</span>
										</div>
									</div>

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</Layout>
);

export default SecondPage
