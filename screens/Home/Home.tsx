import styles from "./Home.style";
import { View, Text } from "react-native";
import Button from "../../components/Button/Button";
import padding from "../../misc/padding";
import Colors from "../../constants/Colors";
import boxShadow from "../../misc/boxShadow";

function Home() {
	return (
		<View style={styles.Home}>
			<View
				style={{
					backgroundColor: Colors.white,
					borderColor: Colors.black,
					width: "100%",

					...boxShadow(4, -2, 3, 1, "#000000", 5),
					shadowOffset: {
						width: 4,
						height: -50,
					},

					...padding(10),
					display: "flex",
				}}
			>
				<Text style={{ color: "#000000" }}>
					I AM THE HOME COMPONENT
				</Text>
			</View>

			<Button
				style={{ backgroundColor: "#cbcbcb" }}
				onPress={() => {
					console.log("Hello");
				}}
			>
				<Text>Hello</Text>
			</Button>
		</View>
	);
}

export default Home;
