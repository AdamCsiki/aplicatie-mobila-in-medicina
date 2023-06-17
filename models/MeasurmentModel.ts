export type UnitOfMeasurement =
    | 'gram'
    | 'kilogram'
    | 'milligram'
    | 'ounce'
    | 'pound'
    | 'liquidOunce'
    | 'cup'
    | 'quart'
    | 'milliliter'
    | 'liter'

export type VolumeMeasurementUnits =
    | 'liquidOunce'
    | 'cup'
    | 'quart'
    | 'milliliter'
    | 'liter'

export type MassMeasurementUnits =
    | 'gram'
    | 'kilogram'
    | 'milligram'
    | 'ounce'
    | 'pound'

export const unitOfMeasurementArray: UnitOfMeasurement[] = [
    'gram',
    'kilogram',
    'milligram',
    'ounce',
    'pound',
    'liquidOunce',
    'cup',
    'quart',
    'milliliter',
    'liter',
]

export const VolumeMeasurementArray: VolumeMeasurementUnits[] = [
    'liquidOunce',
    'cup',
    'quart',
    'milliliter',
    'liter',
]

export const MassMeasurementArray: MassMeasurementUnits[] = [
    'gram',
    'kilogram',
    'milligram',
    'ounce',
    'pound',
]
