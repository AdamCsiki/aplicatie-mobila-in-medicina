import {
    Button,
    Layout,
    Text,
    Divider,
    TopNavigation,
    Modal,
    useTheme,
} from '@ui-kitten/components'
import React, { useEffect, useState } from 'react'
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import style from './DietScreent.style'
import { ScrollView } from 'react-native'
import EditablePercentageBar from '../../components/EditablePercentageBar/EditablePercentageBar'
import Spacer from '../../components/Spacer/Spacer'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import FullScreenModal from '../../components/FullScreenModal/FullScreenModal'
import {
    calculateMacros,
    getStoredFoods,
} from '../../redux/actions/dietActions'

function DietScreen({ navigation }: any) {
    const diet = useSelector((state: RootState) => state.diet)
    const dispatch = useDispatch()

    const [statsEditVisible, setStatsEditVisible] = useState(false)

    const [addedFoods, setAddedFoods] = useState<any>([])

    const theme = useTheme()

    useEffect(() => {
        calculateMacros().then((action) => {
            dispatch(action)
        })
        getStoredFoods().then((foods) => {
            setAddedFoods(foods)
        })
    }, [])

    return (
        <Layout style={{ flex: 1 }} level="4">
            <ScrollView
                contentContainerStyle={style.DietScreen}
                scrollEnabled
                showsVerticalScrollIndicator
                nestedScrollEnabled
            >
                <Layout style={style.StatContainer} level="1">
                    <Layout style={style.StatHeader}>
                        <Text category="h4">Stats</Text>
                        <Button
                            onPress={() =>
                                setStatsEditVisible(!statsEditVisible)
                            }
                        >
                            <Text>Edit</Text>
                        </Button>

                        <FullScreenModal
                            visible={statsEditVisible}
                            onBackdropPress={() => setStatsEditVisible(false)}
                        ></FullScreenModal>
                    </Layout>

                    <Spacer />

                    <Text category="h6">Calories</Text>
                    <ProgressBar
                        current={diet.currentCals}
                        max={diet.maxCals}
                        sign={'Kcal'}
                        color={theme['color-basic-400']}
                    />

                    <Spacer />

                    <Text category="h6">Carbohydrates</Text>
                    <ProgressBar
                        current={diet.currentCarbs}
                        max={diet.maxCarbs}
                        sign={'g'}
                        color={theme['color-success-500']}
                    />

                    <Spacer />

                    <Text category="h6">Fats</Text>
                    <ProgressBar
                        current={diet.currentFats}
                        max={diet.maxFats}
                        sign={'g'}
                        color={theme['color-warning-500']}
                    />

                    <Spacer />

                    <Text category="h6">Protein</Text>
                    <ProgressBar
                        current={diet.currentProtein}
                        max={diet.maxProtein}
                        sign={'g'}
                        color={theme['color-danger-500']}
                    />
                </Layout>

                <Spacer />

                <Layout
                    style={style.StatContainer}
                    level="1"
                    onTouchEnd={() => {
                        getStoredFoods().then((foods) => {
                            setAddedFoods(foods)
                        })
                    }}
                >
                    <Text category="h5">Foods</Text>

                    <Spacer />

                    <Button
                        onPress={() => navigation.navigate('Foods')}
                        style={{ width: '100%' }}
                    >
                        <Text category="h4">Add Food</Text>
                    </Button>
                    <Text>{JSON.stringify(addedFoods)}</Text>
                </Layout>
                <Spacer />
                <Layout style={style.StatContainer} level="1"></Layout>
            </ScrollView>
        </Layout>
    )
}

export default DietScreen
