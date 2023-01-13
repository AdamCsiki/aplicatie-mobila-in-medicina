import axios from "../api/base";
import { useEffect, useState } from "react";
import httpStatus from "../misc/httpStatus";

function useAxios() {
	const [response, setResponse] = useState<any>({});
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
				setError(httpStatus[err.response.status].message);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	return { response, error, loading, fetchData, axios };
}

export default useAxios;
