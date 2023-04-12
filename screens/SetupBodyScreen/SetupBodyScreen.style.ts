import { StyleSheet } from 'react-native'
import padding from '../../misc/padding'

export default StyleSheet.create({
    SetupBodyScreen: {
        flexGrow: 1,

        ...padding(16),
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
})
