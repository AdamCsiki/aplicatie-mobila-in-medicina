import style from "./InputField.style";
import {
	TextInput,
	View,
	Text,
	KeyboardTypeOptions,
	TextInputProps,
} from "react-native";
import { H5, H6 } from "../../constants/TypeScale";
import { themeColors } from "../../misc/ThemeProvider";
import { useTheme } from "../../misc/ThemeProvider";

function InputField({
	label,
	placeholder,
	keyboardType,
	textContentType,
	autoCapitalize,
	secureTextEntry,
	spellCheck = false,
	autoCorrect = false,
	onChangeText,
}: {
	placeholder?: string;
	label?: string;
	keyboardType?: KeyboardTypeOptions;
	textContentType?: TextInputProps["textContentType"];
	autoCapitalize?: TextInputProps["autoCapitalize"];
	secureTextEntry?: boolean;
	spellCheck?: boolean;
	autoCorrect?: boolean;
	onChangeText: (e: any) => void;
}) {
	return (
		<View style={[style().InputFieldContainer]}>
			{label ? <H6 style={style().inputFieldLabel}>{label}</H6> : null}

			<TextInput
				style={[
					style().InputField,
					{
						marginLeft: label ? 5 : 0, // if there is no label then there is no need for a gap
					},
				]}
				placeholder={placeholder ? " " + placeholder : ""}
				placeholderTextColor={style().inputFieldPlaceHolder.color}
				keyboardType={keyboardType}
				onChangeText={onChangeText}
				textContentType={textContentType}
				autoCapitalize={autoCapitalize}
				secureTextEntry={secureTextEntry}
				spellCheck={spellCheck}
				autoCorrect={autoCorrect}
			></TextInput>
		</View>
	);
}

export default InputField;
