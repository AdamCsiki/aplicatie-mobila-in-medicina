import { ScrollView, TouchableOpacity, Image } from "react-native";
import { Layout, Text, Button, Divider } from "@ui-kitten/components";
import style from "./Profile.style";
import { LineChart } from "react-native-chart-kit";
import { chartConfig } from "../../constants/chartConfig";
import Container from "../../components/Container/Container";

function Profile() {
	return (
		<ScrollView contentContainerStyle={style().Profile}>
			<Layout style={style().profileBackground}>
				<Image></Image>
			</Layout>
			<Layout style={style().profileUser}>
				<Layout
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
				</Layout>
				<TouchableOpacity style={style().profileUsername}>
					<Text category="h5">Csiki Adam Csaba</Text>
				</TouchableOpacity>
			</Layout>
			<Divider />
			<Layout
				style={style().profileMain}
				level="1"
			>
				<Divider />
				<Text category="h5">Overview</Text>
				<Divider />
				<Container
					style={style().profileContainer}
					level="1"
				></Container>
			</Layout>
		</ScrollView>
	);
}

export default Profile;
