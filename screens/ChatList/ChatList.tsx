import { useEffect, useState } from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import UserContainer from "../../components/UserContainer/UserContainer";
import style from "./ChatList.style";

function ChatList({ navigation }: { navigation: any }) {
	let botDescriptionList = [
		"Ask me anything...",
		"Need anything?",
		"How are you?",
		"Need help?",
		"Please talk with me...",
	];
	let description;
	let userList: any = [];
	let currentUser = {};

	useEffect(() => {
		description =
			botDescriptionList[
				Math.floor(Math.random() * botDescriptionList.length)
			];
	});

	return (
		<View style={style.ChatList}>
			<ScrollView
				style={style.ChatListScroll}
				contentContainerStyle={style.ChatListContainerStyle}
			>
				<UserContainer
					name="Chot"
					profilePicture={
						"https://i.ytimg.com/vi/YWcrfp_dXKM/maxresdefault.jpg"
					}
					description={"Ask me anything"}
					navigation={navigation}
				/>
				{userList ?? undefined}
			</ScrollView>
		</View>
	);
}

export default ChatList;
