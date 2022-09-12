import styled from "styled-components";

export const Container = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 1.2rem;
	margin-bottom: 2rem;
	background-color: #333;
	color: #fff;
	ul {
		display: flex;
		list-style: none;
		li {
			margin-right: 1.3rem;
		}
		a {
			color: #fff;
			text-decoration: none;
			padding: 5px;
			transition: 0.4s;
			border-bottom: 2px solid transparent;
			&:hover {
				border-color: #fff;
			}
		}
	}
`;
export const Logo = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	h1 {
		margin-left: 0.5rem;
	}
`;
