import { Button, Layout, Text } from '@ui-kitten/components'
import { MEAL_TYPES } from '../../redux/types/types'
import MealModel from '../../models/MealModel'
import globalStyle from '../../styles/global-style'
import SearchList from '../../components/SearchList/SearchList'
import Spacer from '../../components/Spacer/Spacer'
import { useEffect } from 'react'
import UserFoodModel from '../../models/UserFoodModel'
import SearchFoodItemDetailed from '../../components/SearchFoodItemDetailed/SearchFoodItemDetailed'
import FullScreenModal from "../../components/FullScreenModal/FullScreenModal";

function ViewMealScreen({
    currentMeal,
    meals,
    afterSubmit,
    onBack,
}: {
    currentMeal: MEAL_TYPES
    meals: MealModel
    afterSubmit: () => void
    onBack: () => void
}) {
    useEffect(() => {
        console.log(meals[currentMeal])
    }, [])

    return (
        <Layout>
            <Layout style={globalStyle.SpaceBetween}>
                <Text category={'h6'}>{currentMeal}</Text>
                <Button size={'small'} onPress={onBack}>
                    x
                </Button>
            </Layout>

            <Spacer height={32} />

            <SearchList
                data={meals[currentMeal]}
                renderItem={({ item }: { item: UserFoodModel }) => (
                    <SearchFoodItemDetailed item={item} onPress={() => {}} />
                )}
            />
            
            <FullScreenModal>
            
            </FullScreenModal>
        </Layout>
    )
}

export default ViewMealScreen
