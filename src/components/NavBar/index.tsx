import Link from "next/link";
import Image from "next/image";
import * as S from "./styles";

export function NavBar() {
	return (
		<S.Container>
			<S.Logo>
				<Image
					src="/images/pokeball.png"
					width={30}
					height={30}
					alt="pokeNext"
				/>
				<h1>PokeNext</h1>
			</S.Logo>
			<ul>
				<li>
					<Link href="/">
						<a>Home</a>
					</Link>
				</li>
				<li>
					<Link href="/about">
						<a>Sobre</a>
					</Link>
				</li>
			</ul>
		</S.Container>
	);
}
