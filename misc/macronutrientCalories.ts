export const carbCaloriesPerGram = 4
export const fatCaloriesPerGram = 9
export const proteinCaloriesPerGram = 4

export const defaultMacroRatios = {
    carb: 0.5,
    fat: 0.3,
    protein: 0.2,
}

export const calculateGramsOfProteinByCalories = (calories: number) => {
    return Number.parseFloat(
        (
            (defaultMacroRatios.protein * calories) /
            proteinCaloriesPerGram
        ).toFixed(2)
    )
}

export const calculateGramsOfCarbohydratesByCalories = (calories: number) => {
    return Number.parseFloat(
        ((defaultMacroRatios.carb * calories) / carbCaloriesPerGram).toFixed(2)
    )
}

export const calculateGramsOfFatByCalories = (calories: number) => {
    return Number.parseFloat(
        ((defaultMacroRatios.fat * calories) / fatCaloriesPerGram).toFixed(2)
    )
}
