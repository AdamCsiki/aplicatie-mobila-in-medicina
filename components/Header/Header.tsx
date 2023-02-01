import style from "./Header.style";
import {
	Icon,
	TopNavigation,
	TopNavigationAction,
} from "@ui-kitten/components";

const BackIcon = (props: any) => (
	<Icon
		{...props}
		name="arrow-back"
	/>
);

const BackAction = () => {
	return <TopNavigationAction icon={BackIcon} />;
};

const Header = () => {
	return (
		<TopNavigation
			accessoryLeft={BackAction}
			title="Home"
		/>
	);
};

export default Header;
