import style from "./Home.style";
import { View, ScrollView, Text, Pressable } from "react-native";
import Button from "../../components/Button/Button";
import { H1, H2, H3, H4, H6, Span } from "../../constants/TypeScale";

function Home() {
	return (
		<View style={style.Home}>
			<View style={style.homeHeader}>
				<H3 style={{ textAlign: "center" }}>News</H3>
			</View>

			<View style={style.homeNewsContainer}>
				<ScrollView
					style={style.homeNews}
					contentContainerStyle={style.homeNewsContent}
					nestedScrollEnabled={true}
					onScroll={() => {
						console.log("I WAS SCROLLED");
					}}
				>
					<Pressable>
						<H2>Miau</H2>
					</Pressable>
					<Pressable>
						<H2>Miau</H2>
					</Pressable>
					<Pressable>
						<H2>Miau</H2>
					</Pressable>
					<Pressable>
						<H2>Miau</H2>
					</Pressable>
					<Pressable>
						<H2>Miau</H2>
					</Pressable>
					<Pressable>
						<H2>Miau</H2>
					</Pressable>
					<Pressable>
						<H2>Miau</H2>
					</Pressable>
					<Pressable>
						<H2>Miau</H2>
					</Pressable>
					<Pressable>
						<H2>Miau</H2>
					</Pressable>
					<Pressable>
						<H2>Miau</H2>
					</Pressable>
					<Pressable>
						<H2>Miau</H2>
					</Pressable>
				</ScrollView>
			</View>

			<Button style={{ backgroundColor: "#cbcbcb" }}>
				<Span>Hello</Span>
			</Button>
		</View>
	);
}

export default Home;
