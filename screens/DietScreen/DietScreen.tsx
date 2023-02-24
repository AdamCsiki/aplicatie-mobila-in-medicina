import {
    Button,
    Layout,
    Text,
    Divider,
    TopNavigation,
} from '@ui-kitten/components'
import React, { useState } from 'react'
import Container from '../../components/Container/Container'
import PercentageBar from '../../components/PercentageBar/PercentageBar'
import style from './DietScreent.style'
import { ScrollView } from 'react-native'
import EditablePercentageBar from '../../components/EditablePercentageBar/EditablePercentageBar'
import Spacer from '../../components/Spacer/Spacer'

function DietScreen({ navigation }: any) {
    const [calories, setCalories] = useState<number>(0)
    const [carbs, setCarbs] = useState<number>(0)
    const [fats, setFats] = useState<number>(0)
    const [protein, setProtein] = useState<number>(0)

    const [addedFoods, setAddedFoods] = useState<any>([])

    return (
        <Layout style={{ flex: 1 }} level="4">
            <ScrollView
                contentContainerStyle={style.DietScreen}
                scrollEnabled
                showsVerticalScrollIndicator
                nestedScrollEnabled
            >
                <Container style={style.StatContainer} level="1">
                    <Text category="h5">Stats</Text>

                    <Spacer />

                    <Text category="h6">Calories</Text>
                    <EditablePercentageBar percentage={calories} />

                    <Spacer />

                    <Text category="h6">Carbohydrates</Text>
                    <PercentageBar percentage={carbs} />

                    <Spacer />

                    <Text category="h6">Fats</Text>
                    <PercentageBar percentage={fats} />

                    <Spacer />

                    <Text category="h6">Protein</Text>
                    <PercentageBar percentage={protein} />
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
