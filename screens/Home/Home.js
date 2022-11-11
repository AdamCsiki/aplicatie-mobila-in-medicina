import styles from "./Home.style";
import { View, Text } from "react-native";
import Button from "../../components/Button/Button";

function Home() {
	return (
		<View style={styles.Home}>
			<View>
				<Text>News</Text>
			</View>

			<Button />
		</View>
	);
}

export default Home;
