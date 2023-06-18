import AsyncStorage from '@react-native-async-storage/async-storage'
import {
    DEFAULT_BODY_INFO,
    SET_BODY_INFO,
    SET_CURRENT_ACTIVITY,
    SET_CURRENT_BMR,
    SET_CURRENT_RMR,
    SET_CURRENT_WEIGHT_PLAN,
    WEIGHT_PLAN_TYPES,
} from '../redux/types/types'
import { BodyModel } from '../models/BodyModel'
import { EXERCISE_ACTIVITY_TYPE } from '../misc/MacroTypes'
import {
    BMR_TYPES,
    calculateBMR,
    calculateRMR,
    RMR_TYPES,
} from '../misc/Equations'

class BodyService {
    setBodyInfo(bodyInfo: BodyModel) {
        bodyInfo.BMR = calculateBMR(
            bodyInfo.BMR_equation,
            bodyInfo.weight,
            bodyInfo.height,
            bodyInfo.age,
            bodyInfo.sex
        )
        bodyInfo.RMR = calculateRMR(
            bodyInfo.RMR_equation,
            bodyInfo.weight,
            bodyInfo.height,
            bodyInfo.age,
            bodyInfo.sex
        )

        return AsyncStorage.setItem('userBodyInfo', JSON.stringify(bodyInfo))
            .then(() => {
                return {
                    type: SET_BODY_INFO,
                    payload: {
                        ...bodyInfo,
                    },
                }
            })
            .catch((err) => {
                console.log('ERROR: ', err)
                return {
                    type: DEFAULT_BODY_INFO,
                }
            })
    }

    getBodyInfo() {
        return AsyncStorage.getItem('userBodyInfo').then((userBodyInfo) => {
            if (!userBodyInfo) {
                return {
                    type: DEFAULT_BODY_INFO,
                }
            }

            const bodyInfo: BodyModel = JSON.parse(userBodyInfo)

            return {
                type: SET_BODY_INFO,
                payload: {
                    ...bodyInfo,
                },
            }
        })
    }

    setCurrentBMR(bmr_equation: BMR_TYPES, bmr: number) {
        return AsyncStorage.getItem('userBodyInfo').then((userBodyInfo) => {
            if (!userBodyInfo) {
                return {
                    type: DEFAULT_BODY_INFO,
                }
            }

            bmr = Number.parseFloat(bmr.toFixed(2))

            const bodyInfo: BodyModel = JSON.parse(userBodyInfo)
            bodyInfo.BMR_equation = bmr_equation
            bodyInfo.BMR = bmr

            return AsyncStorage.setItem(
                'userBodyInfo',
                JSON.stringify(bodyInfo)
            ).then(() => {
                return {
                    type: SET_CURRENT_BMR,
                    payload: {
                        BMR_equation: bmr_equation,
                        BMR: bmr,
                    },
                }
            })
        })
    }

    setCurrentRMR(rmr_equation: RMR_TYPES, rmr: number) {
        return AsyncStorage.getItem('userBodyInfo').then((userBodyInfo) => {
            if (!userBodyInfo) {
                return {
                    type: DEFAULT_BODY_INFO,
                }
            }

            rmr = Number.parseFloat(rmr.toFixed(2))

            const bodyInfo: BodyModel = JSON.parse(userBodyInfo)
            bodyInfo.RMR_equation = rmr_equation
            bodyInfo.RMR = rmr

            return AsyncStorage.setItem(
                'userBodyInfo',
                JSON.stringify(bodyInfo)
            ).then(() => {
                return {
                    type: SET_CURRENT_RMR,
                    payload: {
                        RMR_equation: rmr_equation,
                        RMR: rmr,
                    },
                }
            })
        })
    }

    setCurrentActivity(activity: EXERCISE_ACTIVITY_TYPE) {
        return AsyncStorage.getItem('userBodyInfo').then((userBodyInfo) => {
            if (!userBodyInfo) {
                return {
                    type: DEFAULT_BODY_INFO,
                }
            }

            const bodyInfo: BodyModel = JSON.parse(userBodyInfo)
            bodyInfo.activity = activity

            return AsyncStorage.setItem(
                'userBodyInfo',
                JSON.stringify(bodyInfo)
            ).then(() => {
                return {
                    type: SET_CURRENT_ACTIVITY,
                    payload: {
                        activity: activity,
                    },
                }
            })
        })
    }

    setCurrentWeightPlan(
        weightPlanType: WEIGHT_PLAN_TYPES,
        weightPlanValue: number
    ) {
        return AsyncStorage.getItem('userBodyInfo').then((userBodyInfo) => {
            if (!userBodyInfo) {
                return {
                    type: DEFAULT_BODY_INFO,
                }
            }

            const bodyInfo: BodyModel = JSON.parse(userBodyInfo)
            bodyInfo.weightPlanType = weightPlanType
            bodyInfo.weightPlanValue = weightPlanValue

            return AsyncStorage.setItem(
                'userBodyInfo',
                JSON.stringify(bodyInfo)
            ).then(() => {
                return {
                    type: SET_CURRENT_WEIGHT_PLAN,
                    payload: {
                        weightPlanType: weightPlanType,
                        weightPlanValue: weightPlanValue,
                    },
                }
            })
        })
    }
}

export default new BodyService()
