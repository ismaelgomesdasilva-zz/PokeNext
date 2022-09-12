import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 2rem 1rem;
	margin-bottom: 2rem;
	width: 20%;
	border-radius: 1rem;
	border: 2px solid #e33d33;
	box-shadow: 5px 5px 12px rgba(0, 0, 0, 0.5);
	background-color: #333;
	color: #fff;
	p {
		margin: 1rem 0;
		background-color: #e33d33;
		border-radius: 5px;
		padding: 5px;
		color: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	h3 {
		text-transform: capitalize;
		margin-bottom: 1rem;
		font-size: 1.4rem;
	}
	a {
		width: 100px;
		height: 35px;
		text-decoration: none;
		background-color: #fff;
		color: #222;
		padding: 0.7rem, 1.2rem;
		border-radius: 5px;
		transition: 0.4s;
		display: flex;
		justify-content: center;
		align-items: center;
		font-weight: bold;
		&:hover {
			background-color: #e33d33;
			color: #fff;
		}
	}
`;
