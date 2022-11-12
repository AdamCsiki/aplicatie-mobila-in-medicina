function margin(a: any, b?: any, c?: any, d?: any) {
	return {
		marginTop: a,
		marginRight: b ? b : a,
		marginBottom: c ? c : a,
		marginLeft: d ? d : b ? b : a,
	};
}

export default margin;
