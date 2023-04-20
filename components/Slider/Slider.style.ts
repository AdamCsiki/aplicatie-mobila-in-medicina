import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    Container: {
        height: 25,
    },
    Track: {
        height: '50%',

        color: '#0000ff',

        borderRadius: 8,
    },
    Thumb: {
        borderRadius: 16,

        height: 20,
        width: 20,

        alignSelf: 'flex-start',

        position: 'relative',
    },
    ThumbText: {
        width: 50,

        textAlign: 'center',

        left: '-75%',
        bottom: 25,

        position: 'absolute',
    },
})
