import { List, ListItem, Text } from "@ui-kitten/components";
import style from "./ScrollContainer.style";

function ScrollContainer({ data }: { data?: any[] }) {
	return (
		<List
			style={style().ScrollContainer}
			data={data}
			renderItem={({ item }) => (
				<ListItem
					title={item.title}
					children={<Text>Hello</Text>}
				/>
			)}
		/>
	);
}

export default ScrollContainer;
