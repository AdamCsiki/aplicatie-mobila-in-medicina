import { StatusBar, StyleSheet } from 'react-native'

export default StyleSheet.create({
    App: {
        zIndex: 1,

        paddingTop: StatusBar.currentHeight,

        height: '100%',
        width: '100%',

        display: 'flex',
        justifyContent: 'flex-start',

        position: 'relative',
    },

    AppLoading: {
        zIndex: 1,

        height: '100%',
        width: '100%',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
})
