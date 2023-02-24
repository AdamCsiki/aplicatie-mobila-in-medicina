import UserModel from './UserModel'

export type AuthStateModel = {
    isLoggedIn: boolean
    refresh: string | null
    token: string | null
    user: UserModel | null
    error: string | null
}
