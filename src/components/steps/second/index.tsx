import { useFormik } from "formik";
import React, { useEffect } from "react";
import styled from "styled-components";
import * as Yup from "yup";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { nextStep, previousStep, setUser } from "../../../redux/slices/app";
import { IUser } from "../../../types";
import { Button } from "../../button";
import { Input } from "../../input";

interface Props {}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
`;

const ButtonHolder = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 64px;
`;

const DonorInfoSchema = Yup.object().shape({
	firstName: Yup.string()
		.min(2, "Vaše meno je veľmi krátke.")
		.max(30, "Vaše meno je veľmi dlhé.")
		.required("Toto pole je povinné vyplniť."),
	lastName: Yup.string()
		.min(2, "Vaše priezvisko je veľmi krátke.")
		.max(30, "Vaše priezvisko je veľmi dlhé.")
		.required("Toto pole je povinné vyplniť."),
	email: Yup.string()
		.email("Zadali ste nesprávny e-mail.")
		.required("Toto pole je povinné vyplniť."),
	phone: Yup.string().matches(
		/^\+((421)|(420))[1-9][0-9]{2}[0-9]{3}[0-9]{3}$/,
		"Zadajte telefónne číslo v medzinárodnom formáte"
	),
});

const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 16px;
`;

const FormTitle = styled.h5`
	margin: 0;
`;

export const SecondStep: React.FC<Props> = () => {
	const dispatch = useAppDispatch();
	const user = useAppSelector((state) => state.app.user);

	const initialValues: IUser = {
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
	};

	const {
		handleSubmit,
		handleChange,
		handleBlur,
		setFieldValue,
		validateForm,
		values,
		errors,
		touched,
		isValid,
		dirty,
	} = useFormik({
		initialValues: initialValues,
		validationSchema: DonorInfoSchema,
		onSubmit: (values) => {
			dispatch(setUser(values));
			dispatch(nextStep({}));
		},
	});

	useEffect(() => {
		if (user) {
			setFieldValue("firstName", user.firstName);
			setFieldValue("lastName", user.lastName);
			setFieldValue("email", user.email);
			setFieldValue("phone", user.phone);
			validateForm(user);
		}
	}, [user, setFieldValue, validateForm]);

	return (
		<Container>
			<h1>Potrebujeme od Vás zopár informácií</h1>
			<FormTitle>O vás</FormTitle>
			<Form onSubmit={handleSubmit}>
				<Input
					label="Meno"
					placeholder="Zadajte Vaše meno"
					type="text"
					name="firstName"
					onChange={handleChange}
					onBlur={handleBlur}
					value={values.firstName}
					error={errors.firstName}
					touched={touched.firstName}
				/>
				<Input
					label="Priezvisko"
					placeholder="Zadajte Vaše priezvisko"
					type="text"
					name="lastName"
					onChange={handleChange}
					onBlur={handleBlur}
					value={values.lastName}
					error={errors.lastName}
					touched={touched.lastName}
				/>
				<Input
					label="Email"
					placeholder="Zadajte Váš e-mail"
					type="email"
					name="email"
					onChange={handleChange}
					onBlur={handleBlur}
					value={values.email}
					error={errors.email}
					touched={touched.email}
				/>
				<Input
					label="Telefónne číslo"
					placeholder="+421"
					type="text"
					name="phone"
					onChange={handleChange}
					onBlur={handleBlur}
					value={values.phone}
					error={errors.phone}
					touched={touched.phone}
				/>
				<ButtonHolder>
					<Button
						variant="secondary"
						title="Späť"
						onClick={() => dispatch(previousStep({}))}
					/>
					<Button
						disabled={!(isValid && dirty)}
						variant="primary"
						type="submit"
						title="Pokračovať"
					/>
				</ButtonHolder>
			</Form>
		</Container>
	);
};
