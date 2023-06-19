import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    dayPicker: {
        borderRadius: 8,

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

        padding: 8,
    },
    button: {
        borderRadius: 8,

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        flexGrow: 1,
    },
    buttonText: {
        margin: 0,
        padding: 0,
    },
    dateText: {
        marginHorizontal: 10,
        fontSize: 18,
    },
})
