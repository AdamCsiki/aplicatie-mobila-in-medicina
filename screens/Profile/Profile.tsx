import styles from "./Profile.style";
import { View, ScrollView, Text } from "react-native";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";

function Profile({ navigation }: { navigation: any }) {
	return (
		<ScrollView contentContainerStyle={styles.Profile}>
			<Button>
				<Text>Button</Text>
			</Button>
		</ScrollView>
	);
}

export default Profile;
