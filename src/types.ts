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

export interface IUser {
	firstName?: string;
	lastName?: string;
	email?: string;
	phone?: string;
}

export interface IApiPostResponse {
	messages: IApiPostMessage[];
}

export interface IApiPostMessage {
	type: "SUCCESS" | "ERROR";
	message: string;
}
