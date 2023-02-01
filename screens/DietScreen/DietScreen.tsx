import {
	Button,
	Layout,
	Text,
	Divider,
	TopNavigation,
} from "@ui-kitten/components";
import React, { useReducer, useState } from "react";
import Container from "../../components/Container/Container";
import PercentageBar from "../../components/PercentageBar/PercentageBar";
import style from "./DietScreent.style";
import { ScrollView } from "react-native";
import EditablePercentageBar from "../../components/EditablePercentageBar/EditablePercentageBar";
import Spacer from "../../components/Spacer/Spacer";

function DietScreen() {
	const [calories, setCalories] = useState<number>(0);

	const [carbs, setCarbs] = useState<number>(0);
	const [fats, setFats] = useState<number>(0);
	const [protein, setProtein] = useState<number>(0);

	return (
		<Layout style={{ flex: 1 }}>
			<ScrollView
				contentContainerStyle={style().DietScreen}
				scrollEnabled
				showsVerticalScrollIndicator
				nestedScrollEnabled
			>
				<Container
					style={style().StatContainer}
					level="4"
				>
					<Text category="h5">Stats</Text>

					<Text category="h6">Calories</Text>
					<EditablePercentageBar percentage={calories} />

					<Text category="h6">Carbohydrates</Text>
					<PercentageBar percentage={carbs} />

					<Text category="h6">Fats</Text>
					<PercentageBar percentage={fats} />

					<Text category="h6">Protein</Text>
					<PercentageBar percentage={protein} />
				</Container>
				<Spacer />
				<Container
					style={style().StatContainer}
					level="4"
				></Container>
				<Spacer />
				<Container
					style={style().StatContainer}
					level="4"
				></Container>
			</ScrollView>
		</Layout>
	);
}

export default DietScreen;
