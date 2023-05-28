import { StatusBar, StyleSheet } from 'react-native'

export default StyleSheet.create({
    FullScreenModal: {
        width: '90%',
        maxHeight: '95%',

        right: '5%',
        bottom: '2.5%',
        left: '5%',
        top: StatusBar.currentHeight,

        display: 'flex',
    },
    FSModalContainer: {
        borderRadius: 16,
        padding: 16,
    },
})
