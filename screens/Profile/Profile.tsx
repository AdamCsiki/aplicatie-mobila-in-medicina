import { View, ScrollView, TouchableOpacity, Image } from "react-native";
import { Switch } from "react-native-gesture-handler";
import { log } from "react-native-reanimated";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import { H1, H2, H5, Span } from "../../constants/TypeScale";
import { useTheme } from "../../misc/ThemeProvider";
import style from "./Profile.style";

function Profile() {
	const {
		dark,
		colors,
		setScheme,
	}: { dark?: any; colors?: any; setScheme?: any } = useTheme();

	const toggleTheme = () => {
		dark ? setScheme("light") : setScheme("dark");
	};

	return (
		<ScrollView
			contentContainerStyle={[
				style.Profile,
				{ backgroundColor: colors.background },
			]}
		>
			<Switch
				value={dark}
				onValueChange={toggleTheme}
			/>
			<View
				style={{
					width: "100%",
					height: "30%",
					borderBottomLeftRadius: 500,
				}}
			></View>
			<View
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "flex-start",

					position: "absolute",
					top: "10%",
					left: "2.5%",
				}}
			>
				<View
					style={{
						width: 170,
						height: 170,

						borderRadius: 250,

						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<TouchableOpacity>
						<Image
							source={require("../../assets/horseprofile.jpeg")}
							style={{
								width: 150,
								height: 150,
								borderRadius: 250,
							}}
						/>
					</TouchableOpacity>
				</View>
				<TouchableOpacity
					style={{
						width: "100%",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<H5
						style={{
							textAlign: "center",
						}}
					>
						GymUser
					</H5>
				</TouchableOpacity>
			</View>
			<View
				style={{
					borderWidth: 2,
					width: "100%",

					marginTop: "20%",

					display: "flex",
					flexDirection: "row",
					justifyContent: "center",
					alignItems: "flex-start",
				}}
			>
				<View style={{ flexGrow: 1 }}>
					<TouchableOpacity>
						<H5 style={{ textAlign: "center" }}>Overview</H5>
					</TouchableOpacity>
				</View>
				<View style={{ flexGrow: 1 }}>
					<TouchableOpacity>
						<H5 style={{ textAlign: "center" }}>Records</H5>
					</TouchableOpacity>
				</View>
			</View>
		</ScrollView>
	);
}

export default Profile;
