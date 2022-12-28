import axios from "axios";

const API = "http://192.168.1.150:8080/";
const TIMEOUT = 5000;

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
