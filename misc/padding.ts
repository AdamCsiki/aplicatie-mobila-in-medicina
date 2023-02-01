function padding(a: any, b?: any, c?: any, d?: any) {
	return {
		paddingTop: a,
		paddingRight: b != undefined ? b : a,
		paddingBottom: c != undefined ? c : a,
		paddingLeft: d != undefined ? d : b != undefined ? b : a,
	};
}

export default padding;
