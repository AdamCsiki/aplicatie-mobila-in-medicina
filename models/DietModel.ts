export type DietModel = {
    day: string
    macroRatios: { carbs: number; fats: number; proteins: number }
    currentCals: number
    maxCals: number
    currentCarbs: number
    maxCarbs: number
    currentFats: number
    maxFats: number
    currentProteins: number
    maxProteins: number
    isSetup: boolean
}
