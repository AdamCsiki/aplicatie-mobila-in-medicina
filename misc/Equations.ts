import {
    ACTIVE,
    EXERCISE_ACTIVITY_TYPE,
    LIGHTLY_ACTIVE,
    MODERATELY_ACTIVE,
    SEDENTARY,
    SEX_TYPE_MALE,
    SEX_TYPES,
    VERY_ACTIVE,
} from './MacroTypes'
import {
    MAINTAIN_WEIGHT,
    WEIGHT_GAIN,
    WEIGHT_LOSS,
    WEIGHT_PLAN_TYPES,
} from '../redux/types/types'

export const HARRIS_BMR = 'Harris-Benedict'
export type HARRIS_BMR = 'Harris-Benedict'
export const MIFFLIN_BMR = 'Mifflin-St.Jeor'
export type MIFFLIN_BMR = 'Mifflin-St.Jeor'

export type BMR_TYPES = HARRIS_BMR | MIFFLIN_BMR

export const MifflinBMR = (
    weight: number,
    height: number,
    age: number,
    sex: SEX_TYPES
) => {
    if (sex == SEX_TYPE_MALE) {
        return 10 * weight + 6.25 * height - 5 * age + 5
    } else {
        return 10 * weight + 6.25 * height - 5 * age - 161
    }
}

export const HarrisBMR = (
    weight: number,
    height: number,
    age: number,
    sex: SEX_TYPES
) => {
    return sex == SEX_TYPE_MALE
        ? 13.7516 * weight + 5.0033 * height - 6.755 * age + 66.473
        : 9.5634 * weight + 1.8496 * height - 4.6756 * age + 655.0955
}

export const calculateBMR_katch = (weight: number, fat_percentage: number) => {
    return 370 + 21.6 * ((1 - fat_percentage) * weight)
}

export const calculateBMR = (
    equation: BMR_TYPES,
    weight: number,
    height: number,
    age: number,
    sex: SEX_TYPES
) => {
    switch (equation) {
        case HARRIS_BMR:
            return HarrisBMR(weight, height, age, sex)
        case MIFFLIN_BMR:
            return MifflinBMR(weight, height, age, sex)
    }
}

export const calculateBMR_with_activity = (
    equation: BMR_TYPES,
    activity: EXERCISE_ACTIVITY_TYPE,
    weight: number,
    height: number,
    age: number,
    sex: SEX_TYPES
) => {
    let BMR = calculateBMR(equation, weight, height, age, sex)

    switch (activity) {
        case SEDENTARY:
            return BMR * 1.2
        case LIGHTLY_ACTIVE:
            return BMR * 1.375
        case MODERATELY_ACTIVE:
            return BMR * 1.55
        case ACTIVE:
            return BMR * 1.725
        case VERY_ACTIVE:
            return BMR * 1.9
        default:
            return BMR
    }
}

export const addActivityToBMR = (
    BMR: number,
    activity: EXERCISE_ACTIVITY_TYPE
) => {
    switch (activity) {
        case SEDENTARY:
            return BMR * 1.2
        case LIGHTLY_ACTIVE:
            return BMR * 1.375
        case MODERATELY_ACTIVE:
            return BMR * 1.55
        case ACTIVE:
            return BMR * 1.725
        case VERY_ACTIVE:
            return BMR * 1.9
        default:
            return BMR
    }
}

export const calculateCalories = (
    equation: BMR_TYPES,
    activity: EXERCISE_ACTIVITY_TYPE,
    weight_type: WEIGHT_PLAN_TYPES,
    weight_amount: number,
    weight: number,
    height: number,
    age: number,
    sex: SEX_TYPES
) => {
    let activity_BMR = calculateBMR_with_activity(
        equation,
        activity,
        weight,
        height,
        age,
        sex
    )

    switch (weight_type) {
        case MAINTAIN_WEIGHT: {
            return activity_BMR
        }
        case WEIGHT_LOSS: {
            return activity_BMR * 7 - 7700 * weight_amount
        }
        case WEIGHT_GAIN: {
            return activity_BMR * 7 + 7000 * weight_amount
        }
        default:
            return activity_BMR
    }
}

export const calculateCaloriesWithBMR = (
    BMR: number,
    activity: EXERCISE_ACTIVITY_TYPE,
    weight_type: WEIGHT_PLAN_TYPES,
    weight_amount: number
) => {
    let activity_BMR = addActivityToBMR(BMR, activity)

    switch (weight_type) {
        case MAINTAIN_WEIGHT: {
            return activity_BMR
        }
        case WEIGHT_LOSS: {
            return (activity_BMR * 7 - 7700 * weight_amount) / 7
        }
        case WEIGHT_GAIN: {
            return (activity_BMR * 7 + 7000 * weight_amount) / 7
        }
        default:
            return activity_BMR
    }
}

export const calculateBMI = (weight: number, height: number) => {
    return Number(weight / Math.pow(height / 100, 2))
}

export const bodyFatPercentage = (
    weight: number,
    height: number,
    age: number
) => {
    return calculateBMI(weight, height) * 1.2 + age * 0.23 - 16.2
}

export const HARRIS_RMR = 'Harris-Benedict'
export type HARRIS_RMR = 'Harris-Benedict'
export const WHO_RMR = 'WHO/FAO/UNU'
export type WHO_RMR = 'WHO/FAO/UNU'
export const LUHRMANN_RMR = 'Luhrmann'
export type LUHRMANN_RMR = 'Luhrmann'
export const MIFFLIN_RMR = 'Mifflin-St.Jeor'
export type MIFFLIN_RMR = 'Mifflin-St.Jeor'
export const OWEN_RMR = 'Owen'
export type OWEN_RMR = 'Owen'

export type RMR_TYPES =
    | HARRIS_RMR
    | WHO_RMR
    | LUHRMANN_RMR
    | MIFFLIN_RMR
    | OWEN_RMR

const HarrisRMR = (
    weight: number,
    height: number,
    age: number,
    sex: SEX_TYPES
) => {
    if (sex == SEX_TYPE_MALE) {
        return (66.47 + 13.75 * weight + 5.0 * height - 6.75 * age) * 1.15
    } else {
        return (665.09 + 9.56 * weight + 1.84 * height - 4.67 * age) * 1.15
    }
}

const WHO_FAO_UNU_RMR = (
    weight: number,
    height: number,
    age: number,
    sex: SEX_TYPES
) => {
    if (sex == SEX_TYPE_MALE) {
        return 8.8 * weight + 1128 * height * 100 - 1071
    } else {
        return 9.2 * weight + 632 * height * 100 - 302
    }
}

const LhurmannRMR = (
    weight: number,
    height: number,
    age: number,
    sex: SEX_TYPES
) => {
    return (
        (3169 +
            50 * weight -
            15.3 * age +
            746 * (sex == SEX_TYPE_MALE ? 0 : 1)) /
        4.18
    )
}

const MifflinRMR = (
    weight: number,
    height: number,
    age: number,
    sex: SEX_TYPES
) => {
    if (sex == SEX_TYPE_MALE) {
        return (9.99 * weight + 6.25 * height - 4.92 * age + 5) * 1.15
    } else {
        return (9.99 * weight + 6.25 * height - 4.92 * age - 161) * 1.15
    }
}

const OwenRMR = (weight: number, sex: SEX_TYPES) => {
    if (sex == SEX_TYPE_MALE) {
        return 879 + 10.2 * weight
    } else {
        return 795 + 7.18 * weight
    }
}

export const calculateRMR = (
    equation: RMR_TYPES,
    weight: number,
    height: number,
    age: number,
    sex: SEX_TYPES
) => {
    switch (equation) {
        case HARRIS_RMR:
            return HarrisRMR(weight, height, age, sex)
        case WHO_RMR:
            return WHO_FAO_UNU_RMR(weight, height, age, sex)
        case LUHRMANN_RMR:
            return LhurmannRMR(weight, height, age, sex)
        case MIFFLIN_RMR:
            return MifflinRMR(weight, height, age, sex)
        case OWEN_RMR:
            return OwenRMR(weight, sex)
    }
}
