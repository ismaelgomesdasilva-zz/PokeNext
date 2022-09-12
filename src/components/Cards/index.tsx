import Image from "next/image";
import Link from "next/link";
import * as S from "./styles";
export function Card({ pokemon }) {
	return (
		<S.Container>
			<Image
				src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
				width={120}
				height={120}
				alt={pokemon.name}
			/>
			<p>#{pokemon.id}</p>
			<h3>{pokemon.name}</h3>
			<Link href={`/pokemon/${pokemon.id}`}>
				<a>Detalhes</a>
			</Link>
		</S.Container>
	);
}
