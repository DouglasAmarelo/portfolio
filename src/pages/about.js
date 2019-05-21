import React from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';

import '../components/hero.scss';


const About = () => (
	<Layout>
		<section className="hero hero-header is-dark  is-size-6">
			<div className="hero-body">
				<div className="container has-text-centered">
					<h1 className="title">Sobre mim</h1>
					<p className="content">
						Sonho em construir produtos capazes de afetar a vida de milhares de pessoas ao redor do mundo.
					</p>
				</div>
			</div>
		</section>

		<section className="section">
			<div className="container content home-content">
				<h1 className="title is-spaced">Olá, eu sou o Douglas Lopes <span className="is-size-5" role="img" aria-label="aceno">👋</span></h1>
				<p>Sou programador voltado ao desenvolvimento <strong>front-end</strong> e trabalho desde 2010 na área.</p>
				<p>Sonho em construir produtos capazes de afetar a vida de milhares de pessoas ao redor do mundo.</p>

				<p>Como desenvolvedor tive a oportunidade de participar de grandes projetos para clientes como, Whirlpool Brasil e Whirlpool Latam (Brastemp, Consul, Compra Certa, KitchenAid e Whirlpool), Sony, Itaú, Honda, Microsoft, Ambev, B.blend, Amazon, Terra, Editora Globo, Banco do Brasil, Contém 1g, L'Occitane entre muitos outros.</p>

				<p>Desde 2013 recebi a oportunidade de assumir um cargo de gestão, onde cresci e desenvolvi as minhas habilidades no gerenciamento de projetos e pessoas.</p>

				<p>Nessa função, coordenei e supervisionei uma equipe de 40 colaboradores tendo como atividades principais a criação do escopo do projeto, análise e estimativa de tempo de implementação, controle e distribuição das tarefas entre os membros da equipe, etc. Ainda nessa função, liderei todo o processo de contratação de novos colaboradores, desde a busca de candidatos, passando pela a etapa de entrevista e testes, até a contratação.</p>
				<p>Após isso, fiz o acompanhamento e elaboração de plano de evolução e crescimento dos colaboradores dentro da equipe, visando os objetivos da empresa e do time do qual fui responsável.</p>

				<p>Nos projetos que participei, consegui usar e aprender tecnologias como Sass, Less, Bootstrap, JavaScript, Dust, React e jQuery. Grunt, Gulp e Webpack para automação dos processos de desenvolvimento. Para versionamento dos projetos já trabalhei com TortoiseSVN e Git (GitHub e BitBucket).</p>
				<p>Tudo isso com códigos semânticos, modulares, performáticos, dentro das especificações da W3C e otimizados para SEO.</p>

				<p>Deixei a minha <Link to="/stack">stack de desenvolvimento</Link> atual disponível, para você olhar.</p>

				{/* <p>Veja meus <Link to="/projetos">projetos pessoais</Link></p> */}
			</div>
		</section>



	</Layout>
);

export default About;