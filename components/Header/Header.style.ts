import { Platform, StatusBar, StyleSheet } from 'react-native'
import { useTheme } from '@ui-kitten/components'
import padding from '../../misc/padding'

let statusBarHeight = StatusBar.currentHeight ?? 16

export default () => {
    const theme = useTheme()

    return StyleSheet.create({
        SpaceBetween: {
            backgroundColor: theme['color-primary-100'],
            width: '100%',
            height: 'auto',

            ...padding(8, 8),

            paddingTop: Platform.OS === 'android' ? statusBarHeight + 8 : 16,

            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',

            position: 'relative', // may need to make it absolute

            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
        },
    })
}
