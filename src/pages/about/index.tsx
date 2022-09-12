import Image from "next/image";
import * as S from "./styles";
export default function about() {
	return (
		<S.Container>
			<h1>Sobre o projeto</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolor,
				dolores vel dignissimos assumenda perferendis nihil doloribus
				voluptatibus commodi harum consequuntur maiores pariatur vero? Tempora
				perferendis suscipit omnis iste accusamus!
			</p>
			<Image
				src="/images/charizard.png"
				width={300}
				height={300}
				alt="charizard"
			/>
		</S.Container>
	);
}
