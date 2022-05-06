import React from "react";
import styled from "styled-components";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { Wrapper } from "./wrapper";

interface Props {}

const StyledHeader = styled.header`
	padding: 8px;
	color: #9f9f9f;
	background-color: #fefefe;
	font-weight: 600;
	border-bottom: 1px solid rgba(0, 0, 0, 0.08);

	.social-icon {
		display: flex;
		color: #9f9f9f;
		text-decoration: none;

		&:hover {
			color: #cd8b65;
		}
	}
`;

const HeaderContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

const StyledSocialContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 8px;
`;

export const Header: React.FC<Props> = () => {
	return (
		<StyledHeader>
			<Wrapper>
				<HeaderContainer>
					<span>Nadácia Good boy</span>
					<StyledSocialContainer>
						<a
							href="https://www.facebook.com/GoodRequestCom"
							className="social-icon"
						>
							<FaFacebookF />
						</a>
						<a
							href="https://www.instagram.com/goodrequest/"
							className="social-icon"
						>
							<FaInstagram />
						</a>
					</StyledSocialContainer>
				</HeaderContainer>
			</Wrapper>
		</StyledHeader>
	);
};
