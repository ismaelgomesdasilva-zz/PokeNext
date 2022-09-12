import Image from "next/image";
import { Card } from "../components/Cards";
import styles from "../styles/home.module.css";

export async function getStaticProps() {
	const MAX_POKEMONS = 251;
	const api = "https://pokeapi.co/api/v2/pokemon";
	const res = await fetch(`${api}/?limit=${MAX_POKEMONS}`);
	const data = await res.json();

	//add pokemon index
	data.results.forEach((item, index) => {
		item.id = index + 1;
	});
	return {
		props: {
			pokemons: data.results,
		},
	};
}

export default function Home({ pokemons }) {
	return (
		<>
			<div className={styles.title_container}>
				<h1 className={styles.title}>
					Poke<span>Next</span>
					<Image
						src="/images/pokeball.png"
						width={50}
						height={50}
						alt="pokeball"
					/>
				</h1>
			</div>
			<div className={styles.pokemon_container}>
				{pokemons.map((pokemon: { id: number }) => (
					<Card key={pokemon.id} pokemon={pokemon} />
				))}
			</div>
		</>
	);
}
