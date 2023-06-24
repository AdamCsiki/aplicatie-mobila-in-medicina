import React, {createContext, ReactNode} from "react";

export const NavbarContext = createContext<{
	title: string
	setTitle: React.Dispatch<React.SetStateAction<string>>
	rightItem: ReactNode
	setRightItem: React.Dispatch<React.SetStateAction<ReactNode>>
}>({
	title: '',
	setTitle: () => {},
	rightItem: <></>,
	setRightItem: () => {},
})