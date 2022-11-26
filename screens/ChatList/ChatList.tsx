import { useEffect, useState } from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import UserContainer from "../../components/UserContainer/UserContainer";
import style from "./ChatList.style";

function ChatList({ navigation }: { navigation: any }) {
	let userList: any = [];
	let currentUser = {};

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
					navigation={navigation}
				/>
				{userList ?? undefined}
			</ScrollView>
		</View>
	);
}

export default ChatList;
