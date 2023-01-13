import { View, ScrollView, TouchableOpacity, Image, Text } from "react-native";
import { Switch } from "react-native-gesture-handler";
import { log } from "react-native-reanimated";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import { H1, H2, H5, Span } from "../../constants/TypeScale";
import { useAuth } from "../../context/AuthContext";
import { useTheme } from "../../misc/ThemeProvider";
import style from "./Profile.style";
import { useEffect } from "react";
import { defaultUser } from "../../models/defaults";

function Profile() {
	const { logout, user } = useAuth();

	return (
		<ScrollView contentContainerStyle={style().Profile}>
			<View style={style().profileBackground}></View>
			<View style={style().profileUser}>
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
							style={style().profileImage}
						/>
					</TouchableOpacity>
				</View>
				<TouchableOpacity style={style().profileUsername}>
					<H5>{user.username}</H5>
				</TouchableOpacity>
			</View>
			<View style={style().profileMain}>
				<View style={style().profileDiv}>
					<Button onPress={logout}>
						<Span bold>Logout</Span>
					</Button>
				</View>
			</View>
		</ScrollView>
	);
}

export default Profile;
