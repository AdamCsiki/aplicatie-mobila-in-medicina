export type BodyModel = {
    height: number
    weight: number
    bodyType: 'male' | 'female' | undefined
    age: number
    maxCalsByBody: number
    maxCarbsByBody: number
    maxFatsByBody: number
    maxProteinsByBody: number
    BMR_mifflin: number
    BMR_harris: number
}
