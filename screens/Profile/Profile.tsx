import styles from "./Profile.style";
import { View, ScrollView, Text } from "react-native";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";

function Profile({ navigation }: { navigation: any }) {
	return (
		<View>
			<ScrollView contentContainerStyle={styles.Profile}></ScrollView>
		</View>
	);
}

export default Profile;
