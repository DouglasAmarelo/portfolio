import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import profileImage from '../assets/douglas-lopes-front-end-developer.jpg';

const socialMedias  = [
	{ icon: 'fa-linkedin', link: 'https://www.linkedin.com/in/douglasamarelo/' },
	{ icon: 'fa-github', link: 'https://github.com/DouglasAmarelo' },
	{ icon: 'fa-codepen', link: 'https://codepen.io/DouglasAmarelo/' },
	{ icon: 'fa-twitter', link: 'https://twitter.com/DouglasAmarelo' },
	{ icon: 'fa-medium', link: 'https://medium.com/@DouglasAmarelo' }
];

const IndexPage = (data) => (
	<Layout>
		<section className="section">
			<div className="container has-text-centered">
				<figure className="image is-128x128 photo">
					<img className="is-rounded" src={profileImage} alt="Douglas Lopes" />
				</figure>
				<h1 className="title">Douglas "Amarelo" Lopes</h1>
				<h2 className="subtitle">Front-end developer</h2>

				<div className="socialMedias">

					{
						socialMedias.map(socialMedia => (
							<a
								href={socialMedia.link}
								aria-label={socialMedia.icon}
								key={socialMedia.icon}
								target="_blank"
								rel="noopener noreferrer"
							>
								<span className="icon is-large">
									<i className={`fab fa-2x ${socialMedia.icon}`}></i>
								</span>
							</a>
						))
					}
				</div>
			</div>
		</section>

		<section className="section is-size-5 is-size-6-touch">
			<div className="container content">
				<h1 className="title">Olá, eu sou o Douglas Lopes <span role="img" aria-label="aceno">👋</span></h1>
				<p>Sou programador voltado ao desenvolvimento <strong>front-end</strong> e trabalho desde 2010 na área.</p>
				<p>Sonho em construir produtos capazes de afetar a vida de milhares de pessoas ao redor do mundo.</p>

				<p>Como desenvolvedor tive a oportunidade de participar de grandes projetos para clientes como, Whirlpool Brasil e Whirlpool Latam (Brastemp, Consul, Compra Certa, KitchenAid e Whirlpool), Sony, Itaú, Honda, Microsoft, Ambev, B.blend, Amazon, Terra, Editora Globo, Banco do Brasil, Contém 1g, L'Occitane entre muitos outros.</p>

				<p>Desde 2013 recebi a oportunidade de assumir um cargo de gestão, onde cresci e desenvolvi as minhas habilidades no gerenciamento de projetos e pessoas.</p>

				<p>Nessa função, coordenei e supervisionei uma equipe de 20 colaboradores tendo como atividades principais a criação do escopo do projeto, análise e estimativa de tempo de implementação, controle e distribuição das tarefas entre os membros da equipe, etc. Ainda nessa função, liderei todo o processo de contratação de novos colaboradores, desde a busca de candidatos, passando pela a etapa de entrevista e testes, até a contratação.</p>
				<p>Após isso, fiz o acompanhamento e elaboração de plano de evolução e crescimento dos colaboradores dentro da equipe, visando os objetivos da empresa e do time do qual fui responsável.</p>

				<p>Nos projetos que participei, consegui usar e aprender tecnologias como Sass, Less, Bootstrap, JavaScript, Dust, React e jQuery. Grunt, Gulp e Webpack para automação dos processos de desenvolvimento. Para versionamento dos projetos já trabalhei com TortoiseSVN e Github.</p>
				<p>Tudo isso com códigos semânticos, modulares, performáticos, dentro das especificações da W3C e otimizados para SEO.</p>

				<p>
					Veja meus <Link to="/page-2">projetos pessoais</Link>
				</p>
			</div>
		</section>
	</Layout>
)

export default IndexPage
