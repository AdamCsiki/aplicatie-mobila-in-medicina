import UserModel from './UserModel'

export type AuthStateModel = {
    isLoggedIn: boolean
    accessToken: string | null
    user: UserModel | null
    error: string | null
}
