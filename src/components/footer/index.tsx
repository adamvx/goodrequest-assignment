import React from "react";
import styled from "styled-components";
import { Wrapper } from "../wrapper";

interface Props {}

const StyledFooter = styled.footer`
	display: flex;
	flex-direction: row;
	border-top: 1px solid rgba(0, 0, 0, 0.08);
	padding: 96px 0;
	gap: 32px;

	.footer {
		&-list {
			list-style-type: none;
			padding: 0;
			color: black;
		}
		&-logo {
			width: 64px;
			height: 64px;
		}
	}
`;

const Row = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
`;

const LogoItem = styled.div`
	display: flex;
	align-items: center;
`;

export const Footer: React.FC<Props> = () => {
	return (
		<Wrapper>
			<StyledFooter>
				<Row>
					<LogoItem>
						<img className="footer-logo" src="/dog.svg" alt="" />
						<h1 className="footer-name">Good boy</h1>
					</LogoItem>
				</Row>
				<Row>
					<h5>Nadácia Good boy</h5>
					<ul className="footer-list">
						<li>
							<a href="#">O projekte</a>
						</li>
						<li>
							<a href="#">Ako na to</a>
						</li>
						<li>
							<a href="#">Kontakt</a>
						</li>
					</ul>
				</Row>
				<Row>
					<h5>Nadácia Good boy</h5>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in
						interdum ipsum, sit amet.
					</p>
				</Row>
				<Row>
					<h5>Nadácia Good boy</h5>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in
						interdum ipsum, sit amet.
					</p>
				</Row>
			</StyledFooter>
		</Wrapper>
	);
};
