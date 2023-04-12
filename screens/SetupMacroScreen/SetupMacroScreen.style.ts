import { StyleSheet } from 'react-native'
import padding from '../../misc/padding'

export default StyleSheet.create({
    SetupScreen: {
        flexGrow: 1,

        ...padding(16),
    },
    RatioContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    ContainerHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    Container: {
        width: '100%',

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    Button: {
        width: '30%',
        flexGrow: 0,
    },
})
