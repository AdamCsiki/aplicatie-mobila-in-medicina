import {
    Button,
    Layout,
    Text,
    Divider,
    TopNavigation,
    Modal,
    useTheme,
} from '@ui-kitten/components'
import React, { useState } from 'react'
import Container from '../../components/Container/Container'
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import style from './DietScreent.style'
import { ScrollView } from 'react-native'
import EditablePercentageBar from '../../components/EditablePercentageBar/EditablePercentageBar'
import Spacer from '../../components/Spacer/Spacer'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

function DietScreen({ navigation }: any) {
    const diet = useSelector((state: RootState) => state.diet)

    const [statsEditVisible, setStatsEditVisible] = useState(false)

    const [addedFoods, setAddedFoods] = useState<any>([])

    const theme = useTheme()

    return (
        <Layout style={{ flex: 1 }} level="4">
            <ScrollView
                contentContainerStyle={style.DietScreen}
                scrollEnabled
                showsVerticalScrollIndicator
                nestedScrollEnabled
            >
                <Container style={style.StatContainer} level="1">
                    <Layout style={style.StatHeader}>
                        <Text category="h4">Stats</Text>
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

                    <Spacer height={32} />

                    {statsEditVisible && (
                        <>
                            <Spacer height={32} />
                            <Layout style={style.StatsEditContainer}>
                                <Button>
                                    <Text>Add Carbs</Text>
                                </Button>
                                <Button>
                                    <Text>Add Fats</Text>
                                </Button>
                                <Button>
                                    <Text>Add Protein</Text>
                                </Button>
                            </Layout>
                            <Spacer height={32} />
                        </>
                    )}
                    <Button
                        onPress={() => setStatsEditVisible(!statsEditVisible)}
                        style={{ width: '100%' }}
                    >
                        <Text>Edit</Text>
                    </Button>
                </Container>
                <Spacer />
                <Container style={style.StatContainer} level="1">
                    <Text category="h5">Foods</Text>
                    <Button onPress={() => navigation.navigate('Foods')}>
                        <Text category="h4">Add Food</Text>
                    </Button>
                </Container>
                <Spacer />
                <Container style={style.StatContainer} level="1"></Container>
            </ScrollView>
        </Layout>
    )
}

export default DietScreen
