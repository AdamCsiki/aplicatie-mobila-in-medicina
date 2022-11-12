import { Text } from "react-native";

const baseSize = 16;
const ratio = 1.414;
const color = "#000000";

const scales = {
	h1: baseSize * Math.pow(ratio, 5),
	h2: baseSize * Math.pow(ratio, 4),
	h3: baseSize * Math.pow(ratio, 3),
	h4: baseSize * Math.pow(ratio, 2),
	h5: baseSize * Math.pow(ratio, 1),
	baseText: baseSize,
};

function H1({ children }: { children: any }) {
	return (
		<Text style={{ fontSize: scales.h1, color: color }}>{children}</Text>
	);
}

function H2({ children }: { children: any }) {
	return (
		<Text style={{ fontSize: scales.h2, color: color }}>{children}</Text>
	);
}

function H3({ children }: { children: any }) {
	return (
		<Text style={{ fontSize: scales.h3, color: color }}>{children}</Text>
	);
}

function H4({ children }: { children: any }) {
	return (
		<Text style={{ fontSize: scales.h4, color: color }}>{children}</Text>
	);
}

function H5({ children }: { children: any }) {
	return (
		<Text style={{ fontSize: scales.h5, color: color }}>{children}</Text>
	);
}

function Span({ children }: { children: any }) {
	return (
		<Text style={{ fontSize: scales.baseText, color: color }}>
			{children}
		</Text>
	);
}

export { H1, H2, H3, H4, H5, Span };
