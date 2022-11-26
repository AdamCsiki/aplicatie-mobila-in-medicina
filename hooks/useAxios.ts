import axios from "axios";
import { useEffect, useState } from "react";

const useAxios = (url: string) => {
	const [response, setResponse] = useState(null);
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(true);

	const fetchData = () => {
		axios
			.get(url)
			.then((res) => {
				setResponse(res.data);
			})
			.catch((err) => setError(err))
			.finally(() => {
				setLoading(false);
			});
	};

	useEffect(() => {
		fetchData();
	}, []);

	return [response, error, loading];
};

export default useAxios;
