import { NativeMethods, View, Image } from "react-native";
import style from "./Chat.style";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { H1, H4, H5, H6 } from "../../constants/TypeScale";

function Chat({ navigation, route }: { navigation?: any; route?: any }) {
	return (
		<View style={style.Chat}>
			<View style={style.ChatContainer}>
				<Image
					source={{ uri: route?.params?.profilePicture }}
					style={{ width: 50, height: 50, borderRadius: 50 }}
				/>
				<H6>{route?.params?.name}</H6>
			</View>
		</View>
	);
}

export default Chat;
