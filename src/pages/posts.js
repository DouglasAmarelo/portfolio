import React from 'react';
import Layout from '../components/layout';
import Card from '../components/card';


const postsCards = [
	{
		title: '01 - Lorem ipsum dolor sit',
		subtitle: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus laboriosam a fugiat odio earum sapiente modi laudantium soluta delectus? Optio provident accusamus iusto distinctio? Cum amet aliquam saepe adipisci maiores.',
		link: 'http://douglasamarelo.com/',
		image: 'https://picsum.photos/400/300?image=1',
		tags: ['HTML', 'CSS', 'jsvaScript']
	},
	{
		title: '02 - Lorem ipsum dolor sit',
		subtitle: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus laboriosam a fugiat odio earum sapiente modi laudantium soluta delectus? Optio provident accusamus iusto distinctio? Cum amet aliquam saepe adipisci maiores.',
		link: 'http://douglasamarelo.com/',
		image: 'https://picsum.photos/400/300?image=2',
		tags: ['HTML', 'CSS', 'jsvaScript']
	}
];

const Posts = () => (
	<Layout>
		<section className="hero is-dark is-medium is-bold is-size-6">
			<div className="hero-body">
				<div className="container has-text-centered">
					<h1 className="title">Posts</h1>
					<p className="content">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut fugit dolorum magnam libero! Obcaecati ipsum sequi, voluptatem consequatur voluptatum odit sed nostrum, soluta aspernatur nobis sunt iusto dolore esse dolor?
					</p>
				</div>
			</div>
		</section>

		<section className="section">
			<div className="container">

				<div className="columns is-centered">
					<div className="column is-half">
						{
							postsCards.map(post => (
								<Card key={post.title} {...post} />
							))
						}
					</div>
				</div>

			</div>
		</section>
	</Layout>
);

export default Posts;