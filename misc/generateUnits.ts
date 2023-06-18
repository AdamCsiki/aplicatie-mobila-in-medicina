import {
    MassMeasurementArray,
    UnitOfMeasurement,
} from '../models/MeasurmentModel'
import * as math from 'mathjs'

export const convertQuantity = (
    quantity: number,
    quantityType: UnitOfMeasurement
) => {
    try {
        //@ts-ignore
        if (MassMeasurementArray.indexOf(quantityType) > -1) {
            return math.unit(quantity, quantityType).toNumeric('grams')
        } else {
            return math.unit(quantity, quantityType).toNumeric('milliliters')
        }
    } catch (err) {
        console.log(err)
    }
    return 0
}

export const convertMacros = (
    baseQuantity: number,
    quantityType: UnitOfMeasurement,
    cals: number,
    carbs: number,
    fats: number,
    proteins: number
) => {
    return {
        cals: (100 * cals) / baseQuantity,
        carbs: (100 * carbs) / baseQuantity,
        fats: (100 * fats) / baseQuantity,
        proteins: (100 * proteins) / baseQuantity,
    }
}
