import React from "react";
import styled from "styled-components";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Stepper } from "./components/stepper";
import { Wrapper } from "./components/wrapper";

const Main = styled.main`
	padding: 64px;
	display: flex;
`;

const App: React.FC = () => {
	return (
		<div>
			<Header />
			<Wrapper>
				<Main>
					<div style={{ flex: 1 }}>
						<Stepper stepCount={3} activeStep={0} />
						<h1>Vyberte si možnosť, ako chcete pomôcť</h1>
					</div>
					<img src="/dogmask.png" alt="Dog drinking water" />
				</Main>
			</Wrapper>

			<Footer></Footer>
		</div>
	);
};

export default App;
