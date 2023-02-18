import axios from "axios";

const API = "http://10.0.2.2:8080";
const TIMEOUT = 0;

export default axios.create({
	baseURL: API,
	timeout: TIMEOUT,
	withCredentials: false,
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Headers":
			"Origin, X-Requested-With, Content-Type, Accept",
		"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
	},
});
