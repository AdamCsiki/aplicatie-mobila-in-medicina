import styles from "./Home.style";
import { View, Text } from "react-native";
import Button from "../../components/Button/Button";

function Home() {
	return (
		<View style={styles.Home}>
			<View>
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
