import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { api } from "./api";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Stepper } from "./components/stepper";
import { FirstStep } from "./components/steps/first";
import { SecondStep } from "./components/steps/second";
import { ThirdStep } from "./components/steps/third";
import { Wrapper } from "./components/wrapper";
import { useAppSelector } from "./hooks/redux";
import { IShelter } from "./types";

const Main = styled.main`
	padding: 64px;
	display: flex;
	justify-content: flex-start;
	gap: 64px;
`;

const Content = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: 16px;
`;

const Image = styled.img`
	object-fit: contain;
`;

const App: React.FC = () => {
	const [allShelters, setAllShelters] = useState<IShelter[]>([]);
	const activeStep = useAppSelector((state) => state.app.currentStep);

	useEffect(() => {
		api.v1
			.get<{ shelters: IShelter[] }>("shelters")
			.then((res) => setAllShelters(res.data.shelters))
			.catch(console.log);
	}, []);

	return (
		<div>
			<Header />
			<Wrapper>
				<Main>
					<Content>
						<Stepper stepCount={3} activeStep={activeStep} />
						{activeStep === 0 && <FirstStep allShelters={allShelters} />}
						{activeStep === 1 && <SecondStep />}
						{activeStep === 2 && <ThirdStep />}
					</Content>
					<div>
						<Image src="/dogmask.png" alt="Dog drinking water" />
					</div>
				</Main>
			</Wrapper>
			<Footer />
		</div>
	);
};

export default App;
