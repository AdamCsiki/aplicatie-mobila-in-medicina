import UserModel from './UserModel'

export type ItemModel = {
    id: number
    image: string
    name: string
    user: UserModel | undefined
    calories: number
    carbs: number
    fats: number
    proteins: number
}
