import { View, Text, Image, TouchableOpacity, Touchable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { H5, H6 } from "../../constants/TypeScale";
import style from "./UserContainer.style";
import Icon from "react-native-vector-icons/FontAwesome5";
import Colors from "../../constants/Colors";
import Chat from "../../screens/Chat/Chat";

function UserContainer({
	name,
	profilePicture,
	backgroundColor,
	color,
	navigation,
}: {
	name: string;
	profilePicture?: any;
	backgroundColor?: string;
	color?: string;
	navigation?: any;
}) {
	return (
		<TouchableOpacity
			style={[
				style.UserContainer,
				{ backgroundColor: backgroundColor ?? Colors.white10 },
			]}
			onPress={() => {
				navigation.navigate({
					name: "Chat",
					params: { name: name, profilePicture: profilePicture },
					merge: true,
				});
			}}
		>
			<TouchableOpacity>
				<Image
					style={{
						height: 50,
						width: 50,
						borderRadius: 150,
						marginRight: 5,
					}}
					source={{
						uri: profilePicture,
					}}
				/>
			</TouchableOpacity>

			<H5 style={{ flexGrow: 1, color: color ?? Colors.white }}>
				{name}
			</H5>
			<TouchableOpacity
				style={{
					backgroundColor: Colors.white10,
					width: 50,
					height: 50,
					borderRadius: 25,
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Icon
					name="ellipsis-v"
					size={25}
					color={Colors.white}
				/>
			</TouchableOpacity>
		</TouchableOpacity>
	);
}

export default UserContainer;
