import styles from "./Profile.style";
import { View, Text } from "react-native";
import Button from "../../components/Button/Button";

function Profile() {
	return (
		<View style={styles.Profile}>
			<Text>Profile</Text>
			<Button
				onPress={() => {
					this.props.navigation.navigate("Home");
				}}
			/>
		</View>
	);
}

export default Profile;
