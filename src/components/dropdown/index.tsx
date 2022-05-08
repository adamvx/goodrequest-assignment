import React, { useState } from "react";
import styled from "styled-components";
import { FaChevronDown } from "react-icons/fa";
import { CSSTransition } from "react-transition-group";

interface IDropdownData {
	id: number;
	name: string;
}

interface Props<T extends IDropdownData> {
	data: T[];
	onSelect: (item: T) => void;
	selectedValue?: T;
	placeholder?: string;
}

const Container = styled.div`
	position: relative;

	.dropdown-enter {
		opacity: 0;
	}
	.dropdown-enter-active {
		opacity: 1;
		transition: opacity 200ms;
	}
	.dropdown-exit {
		opacity: 1;
	}
	.dropdown-exit-active {
		opacity: 0;
		transition: opacity 200ms;
	}
`;

const Content = styled.div`
	flex: 1;
`;

const Title = styled.div`
	font-weight: bold;
`;

const Value = styled.div`
	color: #9f9f9f;
`;

const DropdownContainer = styled.div`
	padding: 16px;
	display: flex;
	gap: 16px;
	border: 1px solid #dfdfdf;
	border-radius: 8px;
	align-items: center;
	cursor: pointer;
`;

const DropdownListContainer = styled.div`
	width: 100%;
	position: absolute;
	background-color: white;
	top: 102px;
	border: 1px solid #dfdfdf;
	border-radius: 8px;
	max-height: 256px;
	overflow: scroll;
`;

const DropdownListContent = styled.ul`
	list-style-type: none;
	margin: 0;
	padding: 8px 0;
`;

const DropdownListItem = styled.li`
	cursor: pointer;
	padding: 8px 16px;
	&:hover {
		background-color: #faf9f9;
	}
`;

export const Dropdown = <T extends IDropdownData>({
	data,
	onSelect,
	placeholder,
	selectedValue,
}: Props<T>) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen((val) => !val);

	return (
		<Container onClick={toggle}>
			<DropdownContainer>
				<Content>
					<Title>Útulok</Title>
					<Value>{selectedValue?.name || placeholder}</Value>
				</Content>
				<FaChevronDown
					color="#9f9f9f"
					style={{
						transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
						transition: "transform 200ms",
					}}
				/>
			</DropdownContainer>
			<CSSTransition
				in={isOpen}
				timeout={200}
				classNames="dropdown"
				unmountOnExit
			>
				<DropdownListContainer>
					<DropdownListContent>
						{data.map((item, key) => (
							<DropdownListItem onClick={() => onSelect(item)} key={key}>
								{item.name}
							</DropdownListItem>
						))}
					</DropdownListContent>
				</DropdownListContainer>
			</CSSTransition>
		</Container>
	);
};
