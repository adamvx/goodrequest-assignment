import axios from "axios";

const v1 = axios.create({
	baseURL: "https://frontend-assignment-api.goodrequest.dev/api/v1/",
	timeout: 10000,
});

export const api = {
	v1: v1,
};
