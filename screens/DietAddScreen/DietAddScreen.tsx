import { Layout, Text } from "@ui-kitten/components";
import Container from "../../components/Container/Container";
import style from "./DietAddScreen.style";
import SearchInput from "../../components/SearchInput/SearchInput";
import ScrollContainer from "../../components/ScrollContainer/ScrollContainer";
import Spacer from "../../components/Spacer/Spacer";

function DietAddScreen({ navigation }: { navigation: any }) {
	return (
		<Layout
			style={style.DietAddScreen}
			level="4"
		>
			<Container style={style.DietAddScreenContainer}>
				<SearchInput />
				<Text category="h6">Tags</Text>
			</Container>
			<Spacer />
			<ScrollContainer data={[{ title: "dick" }]} />
		</Layout>
	);
}

export default DietAddScreen;
