function boxShadow(
	hOffset: number,
	vOffset: number,
	blur: number,
	opacity: number,
	color: string,
	elevation?: number
) {
	return {
		shadowOffset: {
			width: vOffset,
			height: hOffset,
		},
		shadowRadius: blur,
		shadowOpacity: opacity,
		shadowColor: color,
		elevation: elevation ?? 10,
	};
}

export default boxShadow;
