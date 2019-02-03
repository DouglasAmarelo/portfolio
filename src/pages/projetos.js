import React from 'react';
import Layout from '../components/layout';
import Card from '../components/card';

const projectsCards = [
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
	},
	{
		title: '03 - Lorem ipsum dolor sit',
		subtitle: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus laboriosam a fugiat odio earum sapiente modi laudantium soluta delectus? Optio provident accusamus iusto distinctio? Cum amet aliquam saepe adipisci maiores.',
		link: 'http://douglasamarelo.com/',
		image: 'https://picsum.photos/400/300?image=3',
		tags: ['HTML', 'CSS', 'jsvaScript']
	},
	{
		title: '04 - Lorem ipsum dolor sit',
		subtitle: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus laboriosam a fugiat odio earum sapiente modi laudantium soluta delectus? Optio provident accusamus iusto distinctio? Cum amet aliquam saepe adipisci maiores.',
		link: 'http://douglasamarelo.com/',
		image: 'https://picsum.photos/400/300?image=4',
		tags: ['HTML', 'CSS', 'jsvaScript']
	},
	{
		title: '05 - Lorem ipsum dolor sit',
		subtitle: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus laboriosam a fugiat odio earum sapiente modi laudantium soluta delectus? Optio provident accusamus iusto distinctio? Cum amet aliquam saepe adipisci maiores.',
		link: 'http://douglasamarelo.com/',
		image: 'https://picsum.photos/400/300?image=5',
		tags: ['HTML', 'CSS', 'jsvaScript']
	},
];

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
						{
							projectsCards.map(project => (
								<Card key={project.title} {...project} />
							))
						}
					</div>
				</div>

			</div>
		</section>
	</Layout>
);

export default SecondPage;
