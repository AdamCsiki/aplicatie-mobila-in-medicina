function margin(a: any, b?: any, c?: any, d?: any) {
	return {
		marginTop: a,
		marginRight: b != undefined ? b : a,
		marginBottom: c != undefined ? c : a,
		marginLeft: d != undefined ? d : b != undefined ? b : a,
	};
}

export default margin;
