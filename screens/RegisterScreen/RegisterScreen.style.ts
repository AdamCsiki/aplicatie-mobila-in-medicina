import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    RegisterScreen: {
        width: '100%',
        height: '100%',

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    RegisterInputContainer: {
        paddingVertical: 16,
        paddingHorizontal: 32,

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',

        flexGrow: 1,
    },
    RegisterHeader: {
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
    },
    RegisterFooter: {
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
    },
})
