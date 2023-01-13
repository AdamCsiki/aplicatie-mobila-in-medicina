import { Text } from "react-native";
import Colors from "./Colors";
import { useTheme } from "../misc/ThemeProvider";

const headerFont = "DMSans";
const textFont = "DMSans";
const boldFont = "DMSans_bold";
const baseSize = 16;
const ratio = 1.414;

const scales = {
	h1: baseSize * Math.pow(ratio, 5),
	h2: baseSize * Math.pow(ratio, 4),
	h3: baseSize * Math.pow(ratio, 3),
	h4: baseSize * Math.pow(ratio, 2),
	h5: baseSize * Math.pow(ratio, 1),
	h6: baseSize * Math.pow(ratio, 0),
	baseText: baseSize,
};

function H1({
	children,
	style,
	left,
	center,
	right,
	bold,
}: {
	children?: any;
	style?: any;
	left?: boolean;
	center?: boolean;
	right?: boolean;
	bold?: boolean;
}) {
	const { colors } = useTheme();
	return (
		<Text
			style={[
				{
					fontFamily: bold ? boldFont : textFont,
					fontSize: scales.h1,
					color: colors.text,
				},
				style,
			]}
		>
			{children}
		</Text>
	);
}

function H2({
	children,
	style,
	left,
	center,
	right,
	bold,
}: {
	children?: any;
	style?: any;
	left?: boolean;
	center?: boolean;
	right?: boolean;
	bold?: boolean;
}) {
	const { colors } = useTheme();
	return (
		<Text
			style={[
				{
					fontFamily: bold ? boldFont : textFont,
					fontSize: scales.h2,
					color: colors.text,
				},
				style,
			]}
		>
			{children}
		</Text>
	);
}

function H3({
	children,
	style,
	left,
	center,
	right,
	bold,
}: {
	children?: any;
	style?: any;
	left?: boolean;
	center?: boolean;
	right?: boolean;
	bold?: boolean;
}) {
	const { colors } = useTheme();
	return (
		<Text
			style={[
				{
					fontFamily: bold ? boldFont : textFont,
					fontSize: scales.h3,
					color: colors.text,
				},
				style,
			]}
		>
			{children}
		</Text>
	);
}

function H4({
	children,
	style,
	left,
	center,
	right,
	bold,
}: {
	children?: any;
	style?: any;
	left?: boolean;
	center?: boolean;
	right?: boolean;
	bold?: boolean;
}) {
	const { colors } = useTheme();
	return (
		<Text
			style={[
				{
					fontFamily: bold ? boldFont : textFont,
					fontSize: scales.h4,
					color: colors.text,
				},
				style,
			]}
		>
			{children}
		</Text>
	);
}

function H5({
	children,
	style,
	left,
	center,
	right,
	bold,
}: {
	children?: any;
	style?: any;
	left?: boolean;
	center?: boolean;
	right?: boolean;
	bold?: boolean;
}) {
	const { colors } = useTheme();
	return (
		<Text
			style={[
				{
					fontFamily: bold ? boldFont : textFont,
					fontSize: scales.h5,
					color: colors.text,
				},
				style,
			]}
		>
			{children}
		</Text>
	);
}

function H6({
	children,
	style,
	left,
	center,
	right,
	bold,
}: {
	children?: any;
	style?: any;
	left?: boolean;
	center?: boolean;
	right?: boolean;
	bold?: boolean;
}) {
	const { colors } = useTheme();
	return (
		<Text
			style={[
				{
					fontFamily: bold ? boldFont : textFont,
					fontSize: scales.h6,
					color: colors.text,
				},
				style,
			]}
		>
			{children}
		</Text>
	);
}

function Span({
	children,
	style,
	left,
	center,
	right,
	bold,
}: {
	children?: any;
	style?: any;
	left?: boolean;
	center?: boolean;
	right?: boolean;
	bold?: boolean;
}) {
	const { colors } = useTheme();
	return (
		<Text
			style={[
				{
					fontFamily: bold ? boldFont : textFont,
					fontSize: scales.baseText,
					color: colors.text,
				},
				style,
			]}
		>
			{children}
		</Text>
	);
}

function ErrorSpan({
	children,
	style,
	left,
	center,
	right,
	bold,
}: {
	children?: any;
	style?: any;
	left?: boolean;
	center?: boolean;
	right?: boolean;
	bold?: boolean;
}) {
	const { colors } = useTheme();
	return (
		<Text
			style={[
				{
					fontFamily: bold ? boldFont : textFont,
					fontSize: scales.baseText,
					color: colors.error,
				},
				style,
			]}
		>
			{children}
		</Text>
	);
}

export { H1, H2, H3, H4, H5, H6, Span, ErrorSpan, scales };
