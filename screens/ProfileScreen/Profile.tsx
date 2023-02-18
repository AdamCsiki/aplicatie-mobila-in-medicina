import { ScrollView, TouchableOpacity, Image } from "react-native";
import { Layout, Text, Button, Divider, useTheme } from "@ui-kitten/components";
import style, { backgroundAnimation } from "./Profile.style";
import Container from "../../components/Container/Container";
import Animated from "react-native-reanimated";
import useAxios from "../../hooks/useAxios";
import { useEffect, useState } from "react";
import defaultUser from "../../models/defaultUser";

function Profile({ navigation }: { navigation: any }) {
	const [user, setUser] = useState(defaultUser);

	const theme = useTheme();

	const { axios } = useAxios();

	return (
		<ScrollView
			contentContainerStyle={{
				...style.Profile,
				backgroundColor: theme["color-basic-100"],
			}}
			pagingEnabled
		>
			<Animated.View
				style={{
					...style.profileBackground,
				}}
				entering={backgroundAnimation}
			>
				<TouchableOpacity
					style={{
						...style.profileBackgroundButton,
						backgroundColor: theme["color-primary-100"],
					}}
				>
					<Image style={style.profileBackgroundImage} />
				</TouchableOpacity>
			</Animated.View>

			<Layout style={style.profileUser}>
				<Layout style={style.profileUserBackground}>
					<TouchableOpacity>
						<Image
							source={require("../../assets/horseprofile.jpeg")}
							style={style.profileImage}
						/>
					</TouchableOpacity>
				</Layout>
				<TouchableOpacity style={style.profileUsername}>
					<Text category="h5">Csiki Adam Csaba</Text>
				</TouchableOpacity>
			</Layout>
			<Divider />
			<Layout
				style={style.profileMain}
				level="1"
			>
				<Divider />
				<Text category="h5">Overview</Text>
				<Divider />
				<Container
					style={style.profileContainer}
					level="1"
				>
					<Button
						onPress={() => {
							console.log(
								axios
									.get("/users/user?id=1")
									.then((res) => {
										console.log("Res: ", res);
									})
									.catch((err) => {
										console.log(err);
									})
							);
						}}
					>
						<Text>Axios</Text>
					</Button>
				</Container>
			</Layout>
		</ScrollView>
	);
}

export default Profile;
