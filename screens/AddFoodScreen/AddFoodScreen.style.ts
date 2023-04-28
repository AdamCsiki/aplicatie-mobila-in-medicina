import { StyleSheet } from 'react-native'
import padding from '../../misc/padding'

export default StyleSheet.create({
    AddFoodScreen: {
        display: 'flex',
        flexGrow: 1,
    },
    ScrollContainer: {
        display: 'flex',
        flexGrow: 1,

        ...padding(8),
    },
})
