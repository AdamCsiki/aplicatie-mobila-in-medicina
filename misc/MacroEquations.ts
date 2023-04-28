import {
    BODY_TYPE_FEMALE,
    BODY_TYPE_MALE,
    DAILY_EXERCISE,
    EXERCISE_ACTIVITY_TYPE,
    EXTREME_EXERCISE,
    EXTREME_WEIGHT_GAIN,
    EXTREME_WEIGHT_LOSS,
    INTENSE_EXERCISE,
    LIGHT_EXERCISE,
    MAINTAIN_WEIGHT,
    MILD_WEIGHT_GAIN,
    MILD_WEIGHT_LOSS,
    SEDENTARY,
    WEIGHT_GAIN,
    WEIGHT_LOSS,
} from './MacroTypes'

export type WEIGHT_LOSS_TYPE =
    | EXTREME_WEIGHT_GAIN
    | WEIGHT_GAIN
    | MILD_WEIGHT_GAIN
    | MAINTAIN_WEIGHT
    | MILD_WEIGHT_LOSS
    | WEIGHT_LOSS
    | EXTREME_WEIGHT_LOSS
    | undefined

export const calculateBMR_mifflin = (
    weight: number,
    height: number,
    age: number,
    bodyType: BODY_TYPE_MALE | BODY_TYPE_FEMALE | undefined
) => {
    return (
        10 * weight +
        6.25 * height +
        5 * age +
        (bodyType == BODY_TYPE_MALE ? 5 : -161)
    )
}

export const calculateBMR_harris = (
    weight: number,
    height: number,
    age: number,
    bodyType: BODY_TYPE_MALE | BODY_TYPE_FEMALE | undefined
) => {
    return bodyType == BODY_TYPE_MALE
        ? 13.397 * weight + 4.799 * height - 5.677 * age + 88.362
        : 9.247 * weight + 3.098 * height - 4.33 * age + 447.593
}

export const calculateBMR_katch = (weight: number, fat_percentage: number) => {
    return 370 + 21.6 * ((1 - fat_percentage) * weight)
}

export const calculateBMR_with_activity = (
    BMR: number,
    activity?: EXERCISE_ACTIVITY_TYPE
) => {
    switch (activity) {
        case SEDENTARY:
            return BMR * 1.05
        case LIGHT_EXERCISE:
            return BMR * 1.2
        case DAILY_EXERCISE:
            return BMR * 1.35
        case INTENSE_EXERCISE:
            return BMR * 1.5
        case EXTREME_EXERCISE:
            return BMR * 1.65
        default:
            return BMR
    }
}

export const calculateCalories = (
    BMR: number,
    activity?: EXERCISE_ACTIVITY_TYPE,
    weight_type?: WEIGHT_LOSS_TYPE
) => {
    switch (weight_type) {
        case EXTREME_WEIGHT_GAIN:
            return calculateBMR_with_activity(BMR, activity) * 1.5
        case WEIGHT_GAIN:
            return calculateBMR_with_activity(BMR, activity) * 1.3
        case MILD_WEIGHT_GAIN:
            return calculateBMR_with_activity(BMR, activity) * 1.1
        case MAINTAIN_WEIGHT:
            return calculateBMR_with_activity(BMR, activity)
        case MILD_WEIGHT_LOSS:
            return calculateBMR_with_activity(BMR, activity) * 0.9
        case WEIGHT_LOSS:
            return calculateBMR_with_activity(BMR, activity) * 0.7
        case EXTREME_WEIGHT_LOSS:
            return calculateBMR_with_activity(BMR, activity) * 0.5
        default:
            return calculateBMR_with_activity(BMR)
    }
}
