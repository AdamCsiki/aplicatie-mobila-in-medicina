import { createStackNavigator } from '@react-navigation/stack'
import FoodDiaryScreen from '../../screens/FoodDiaryScreen/FoodDiaryScreen'
import SearchFoodScreen from '../../screens/SearchFoodScreen/SearchFoodScreen'
import { Layout, useTheme } from '@ui-kitten/components'
import CreateFoodScreen from '../../screens/CreateFoodScreen/CreateFoodScreen'
import ViewMealScreen from '../../screens/ViewMealScreen/ViewMealScreen'
import React, { ReactNode, useState } from 'react'
import { NavbarContext } from '../../context/NavbarContext'

const { Navigator, Screen } = createStackNavigator()

function DiaryStack() {
    const theme = useTheme()

    const [title, setTitle] = useState('')
    const [rightItem, setRightItem] = useState<ReactNode>(<></>)

    return (
        <NavbarContext.Provider
            value={{ title, setTitle, rightItem, setRightItem }}
        >
            <Navigator
                screenOptions={{
                    headerShown: false,
                    headerStyle: {
                        backgroundColor: theme['background-basic-color-1'],
                        borderBottomWidth: 1,
                    },
                    headerTintColor: theme['text-basic-color'],
                    headerTitle: title,
                    headerRight: () => (
                        <Layout
                            style={{
                                marginRight: 16,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            {rightItem}
                        </Layout>
                    ),
                }}
            >
                <Screen
                    name="Meal Diary"
                    component={FoodDiaryScreen}
                    options={{ headerShown: false }}
                />
                <Screen
                    name="Search"
                    component={SearchFoodScreen}
                    options={{
                        headerShown: true,
                    }}
                />
                <Screen
                    name="Meal"
                    // @ts-ignore
                    component={ViewMealScreen}
                    options={{
                        headerShown: true,
                    }}
                />
                <Screen name={'Create'} component={CreateFoodScreen} />
            </Navigator>
        </NavbarContext.Provider>
    )
}

export default DiaryStack
