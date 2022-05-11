import {
	createSlice,
	PayloadAction,
	SliceCaseReducers,
} from "@reduxjs/toolkit";
import { EHelpType, IPrice, IShelter } from "../../types";

interface AppState {
	currentStep: number;
	helpType: EHelpType;
	selectedShelter?: IShelter;
	selectedPrice?: IPrice;
}

export const appSlice = createSlice<AppState, SliceCaseReducers<AppState>>({
	name: "app",
	initialState: {
		currentStep: 0,
		helpType: EHelpType.SHELTER,
		selectedShelter: undefined,
		selectedPrice: undefined,
	},
	reducers: {
		nextStep: (state) => {
			if (state.currentStep < 3) {
				state.currentStep += 1;
			}
		},
		previousStep: (state) => {
			if (state.currentStep > 0) {
				state.currentStep -= 1;
			}
		},
		setShelter: (state, action: PayloadAction<IShelter>) => {
			state.selectedShelter = action.payload;
		},
		setHelpType: (state, action: PayloadAction<EHelpType>) => {
			state.helpType = action.payload;
		},
		setPrice: (state, action: PayloadAction<IPrice>) => {
			state.selectedPrice = action.payload;
		},
	},
});

export const { nextStep, previousStep, setShelter, setHelpType, setPrice } =
	appSlice.actions;

export const appReducer = appSlice.reducer;
