import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "./components/button";
import { Dropdown } from "./components/dropdown";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { PriceSelect } from "./components/price-select";
import { ShelterSelector } from "./components/shelter-selector";
import { Stepper } from "./components/stepper";
import { Wrapper } from "./components/wrapper";
import { IPrice, IShelter } from "./types";

const Main = styled.main`
	padding: 64px;
	display: flex;
	gap: 64px;
`;

const App: React.FC = () => {
	const [shelters, setShelters] = useState<IShelter[]>([]);
	const [selectedValue, setSelectedValue] = useState<IShelter>();
	const [selectedPrice, setSelectedPrice] = useState<IPrice>();

	useEffect(() => {
		axios
			.get<{ shelters: IShelter[] }>(
				"https://frontend-assignment-api.goodrequest.dev/api/v1/shelters"
			)
			.then((res) => setShelters(res.data.shelters))
			.catch(console.log);
	});

	return (
		<div>
			<Header />
			<Wrapper>
				<Main>
					<div
						style={{
							flex: 1,
							display: "flex",
							flexDirection: "column",
							gap: 32,
						}}
					>
						<Stepper stepCount={3} activeStep={0} />
						<h1>Vyberte si možnosť, ako chcete pomôcť</h1>
						<ShelterSelector onSelect={() => {}} />
						<div>
							<h5>O projekte</h5>
							<Dropdown
								data={shelters}
								onSelect={(val) => setSelectedValue(val)}
								selectedValue={selectedValue}
								placeholder={"Vyberte útulok zo zoznamu"}
							/>
						</div>
						<div>
							<h5>Suma, ktorou chcem prispieť</h5>
							<PriceSelect
								onPriceSelect={(val) => setSelectedPrice(val)}
								selectedPrice={selectedPrice}
							/>
						</div>

						<div
							style={{
								display: "flex",
								justifyContent: "flex-end",
								marginTop: 64,
							}}
						>
							<Button title="Pokračovať" />
						</div>
					</div>
					<img
						src="/dogmask.png"
						style={{ objectFit: "contain" }}
						alt="Dog drinking water"
					/>
				</Main>
			</Wrapper>

			<Footer></Footer>
		</div>
	);
};

export default App;
