import { ScrollView, TouchableOpacity, Image } from "react-native";
import { Layout, Text, Button } from "@ui-kitten/components";
import style from "./Profile.style";
import PercentageBar from "../../components/PercentageBar/PercentageBar";
import padding from "../../misc/padding";
import { LineChart } from "react-native-chart-kit";
import { chartConfig } from "../../constants/chartConfig";

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
					<Text category="h6">Csiki Adam Csaba</Text>
				</TouchableOpacity>
			</Layout>
			<Layout style={style().profileMain}>
				<Layout style={style().profileHeader}>
					<Text category="h5">Overview</Text>
				</Layout>
				<ScrollView
					horizontal={true}
					contentContainerStyle={{ height: 200 }}
				>
					<LineChart
						data={{
							labels: [
								"January",
								"February",
								"March",
								"April",
								"May",
								"June",
							],
							datasets: [
								{
									data: [
										Math.random() * 100,
										Math.random() * 100,
										Math.random() * 100,
										Math.random() * 100,
										Math.random() * 100,
										Math.random() * 100,
									],
								},
							],
						}}
						width={1000} // from react-native
						height={200}
						xLabelsOffset={10}
						yAxisSuffix="Kcal"
						yAxisInterval={1} // optional, defaults to 1
						chartConfig={chartConfig()}
						bezier
						style={{ marginLeft: 16 }}
					/>
				</ScrollView>
			</Layout>
		</ScrollView>
	);
}

export default Profile;
