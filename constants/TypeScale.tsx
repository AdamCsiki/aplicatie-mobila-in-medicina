import { Text } from "react-native";
import Colors from "./Colors";

const headerFont = "Bauhaus";
const textFont = "DMSans";
const baseSize = 16;
const ratio = 1.414;
const color = Colors.black;

const scales = {
	h1: baseSize * Math.pow(ratio, 5),
	h2: baseSize * Math.pow(ratio, 4),
	h3: baseSize * Math.pow(ratio, 3),
	h4: baseSize * Math.pow(ratio, 2),
	h5: baseSize * Math.pow(ratio, 1),
	h6: baseSize * Math.pow(ratio, 0),
	baseText: baseSize,
};

function H1({ children, style }: { children: any; style?: any }) {
	return (
		<Text
			style={[
				{
					fontFamily: headerFont,
					fontSize: scales.h1,
					color: color,
				},
				style,
			]}
		>
			{children}
		</Text>
	);
}

function H2({ children, style }: { children: any; style?: any }) {
	return (
		<Text
			style={[
				{
					fontFamily: headerFont,
					fontSize: scales.h2,
					color: color,
				},
				style,
			]}
		>
			{children}
		</Text>
	);
}

function H3({ children, style }: { children: any; style?: any }) {
	return (
		<Text
			style={[
				{
					fontFamily: headerFont,
					fontSize: scales.h3,
					color: color,
				},
				style,
			]}
		>
			{children}
		</Text>
	);
}

function H4({ children, style }: { children: any; style?: any }) {
	return (
		<Text
			style={[
				{
					fontFamily: headerFont,
					fontSize: scales.h4,
					color: color,
				},
				style,
			]}
		>
			{children}
		</Text>
	);
}

function H5({ children, style }: { children: any; style?: any }) {
	return (
		<Text
			style={[
				{
					fontFamily: headerFont,
					fontSize: scales.h5,
					color: color,
				},
				style,
			]}
		>
			{children}
		</Text>
	);
}

function H6({ children, style }: { children: any; style?: any }) {
	return (
		<Text
			style={[
				{
					fontFamily: headerFont,
					fontSize: scales.h6,
					color: color,
				},
				style,
			]}
		>
			{children}
		</Text>
	);
}

function Span({ children, style }: { children: any; style?: any }) {
	return (
		<Text
			style={[
				{
					fontFamily: textFont,
					fontSize: scales.baseText,
					color: color,
				},
				style,
			]}
		>
			{children}
		</Text>
	);
}

export { H1, H2, H3, H4, H5, H6, Span, scales };
