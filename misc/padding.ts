function padding(a: any, b?: any, c?: any, d?: any) {
	return {
		paddingTop: a,
		paddingRight: b ? b : a,
		paddingBottom: c ? c : a,
		paddingLeft: d ? d : b ? b : a,
	};
}

export default padding;
