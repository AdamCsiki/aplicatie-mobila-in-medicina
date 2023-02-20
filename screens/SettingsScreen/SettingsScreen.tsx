import {
	Layout,
	Text,
	TopNavigation,
	TopNavigationAction,
	Icon,
} from "@ui-kitten/components";

const SettingsTopNavigation = ({ onPressBack }: { onPressBack: any }) => {
	const BackIcon = (props: any) => (
		<Icon
			{...props}
			name="arrow-back"
		/>
	);
	const BackAction = () => (
		<TopNavigationAction
			icon={BackIcon}
			onPress={onPressBack}
		/>
	);

	return (
		<TopNavigation
			accessoryLeft={BackAction}
			title="Settings"
		/>
	);
};

function SettingsScreen({ navigation }: any) {
	return (
		<Layout>
			<SettingsTopNavigation onPressBack={() => navigation.goBack()} />
			<Text>Settings</Text>
		</Layout>
	);
}

export default SettingsScreen;
