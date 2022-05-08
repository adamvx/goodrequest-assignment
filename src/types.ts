export enum EHelpType {
	SHELTER = 0,
	NADATION = 1,
}

export interface IShelter {
	id: number;
	name: string;
}

export interface IPrice {
	id: number;
	type: "static" | "custom";
	price?: number;
}
