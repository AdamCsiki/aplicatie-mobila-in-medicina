import { StyleSheet } from 'react-native'
import padding from '../../misc/padding'

export default StyleSheet.create({
    ContentContainer: {
        ...padding(8),
        borderRadius: 16,
    },
    List: {
        width: '100%',

        borderRadius: 16,

        overflow: 'hidden',
    },
})
