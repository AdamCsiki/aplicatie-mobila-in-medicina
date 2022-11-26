import style from "./Home.style";
import {
	View,
	ScrollView,
	Text,
	Pressable,
	Image,
	KeyboardAvoidingView,
} from "react-native";
import Button from "../../components/Button/Button";
import { H1, H2, H3, H4, H5, H6, Span } from "../../constants/TypeScale";
import SearchInput from "../../components/SearchInput/SearchInput";
import Header from "../../components/Header/Header";
import Colors from "../../constants/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";

function Home({ navigation }: { navigation?: any }) {
	return (
		<View style={style.Home}>
			<View
				style={{
					backgroundColor: Colors.mainColor,
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
						backgroundColor: Colors.black,

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
							color: Colors.white,
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
		</View>
	);
}

export default Home;
