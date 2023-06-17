import FoodDiaryModel, {
    FoodDiaryModelPayload,
} from '../../models/FoodDiaryModel'
import { getCurrentDate } from '../../misc/dateFormatting'
import { ActionModel } from '../../models/ActionModel'
import { ADD_FOOD_TO_MEAL, SET_MEALS } from '../types/types'

const initialState: FoodDiaryModel = {
    selectedDay: getCurrentDate(),
    currentDay: getCurrentDate(),
    meals: {
        Breakfast: [],
        Lunch: [],
        Dinner: [],
        Snack: [],
    },
}

function foodDiaryReducer(
    state = initialState,
    action: ActionModel<FoodDiaryModelPayload>
): FoodDiaryModelPayload {
    const { type, payload } = action

    switch (type) {
        case SET_MEALS:
            return { ...state, meals: payload.meals }
        case ADD_FOOD_TO_MEAL: {
            return {
                ...state,
                meals: {
                    ...state.meals,
                    [payload.selectedMeal!]: state.meals[
                        payload.selectedMeal!
                    ].concat([payload.newFood!]),
                },
            }
        }
        default:
            return {
                ...state,
            }
    }
}

export default foodDiaryReducer
