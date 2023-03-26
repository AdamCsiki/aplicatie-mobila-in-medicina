import { StyleSheet } from 'react-native'
import padding from '../../misc/padding'

export default StyleSheet.create({
    ContentContainer: {
        borderRadius: 16,

        overflow: 'hidden',
    },
    List: {
        width: '100%',

        ...padding(8),

        borderRadius: 16,

        overflow: 'hidden',
    },
})
