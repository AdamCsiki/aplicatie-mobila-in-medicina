import { StyleSheet } from 'react-native'
import padding from '../../misc/padding'

export default StyleSheet.create({
    Login: {
        flexGrow: 1,
    },
    LoginContainer: {
        height: '100%',
        width: '100%',

        paddingLeft: 32,
        paddingRight: 32,

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    loginHeaderContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        flexGrow: 1,
    },
    loginInputContainer: {
        height: '30%',

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

        flexGrow: 1,
    },
    loginInput: {
        marginBottom: 32,
    },
    loginButtonContainer: {
        width: '100%',

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',

        flexGrow: 1,
    },
    loginButton: {
        width: '25%',
    },
    loginRegisterContainer: {
        width: '100%',

        paddingTop: 16,

        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
})
