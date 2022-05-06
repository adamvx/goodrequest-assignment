import React from "react";
import styled from "styled-components";
import { Footer } from "./components/footer";
import { Header } from "./components/header";

const Main = styled.main`
	height: 300px;
`;

const App: React.FC = () => {
	return (
		<div>
			<Header />
			<Main></Main>
			<Footer></Footer>
		</div>
	);
};

export default App;
