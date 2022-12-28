import axios from "../api/base";
import { useEffect, useState } from "react";

const useAxios = () => {
	const [response, setResponse] = useState(null);
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(true);

	const fetchData = (
		url: string,
		method: string,
		body = {},
		headers = {}
	) => {
		setError("");

		axios({
			method: method,
			url: url,
			data: body,
			headers: headers,
		})
			.then((res) => {
				setResponse(res.data);
			})
			.catch((err) => {
				if (!err?.response) {
					setError("No Server Response");
				} else if (err.response?.status === 400) {
					setError("Missing Email or Password");
				} else if (err.response?.status === 401) {
					setError("Unauthorized");
				} else {
					setError("Login Failed");
				}
			})
			.finally(() => {
				setLoading(false);
			});
	};

	return { response, error, loading, fetchData };
};

export default useAxios;
